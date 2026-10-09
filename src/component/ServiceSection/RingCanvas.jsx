import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Environment, Lightformer, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "../../public/models/curve-line-with-dark-orange.glb";
const VISIBLE_WIDTH = 2.75; // world units across the screen (model is ~2.64 wide)

// Keeps the ring fitted to the screen width at any canvas size
function FitWidth() {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    const aspect = size.width / size.height;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    camera.position.set(0, 0, VISIBLE_WIDTH / aspect / (2 * Math.tan(vFov / 2)));
    camera.updateProjectionMatrix();
  }, [camera, size]);
  return null;
}

function Ring({ onReady }) {
  const { scene } = useGLTF(MODEL_URL);
  const group = useRef();
  const reduceMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const model = useMemo(() => {
    const clone = scene.clone(true);
    const material = new THREE.MeshPhysicalMaterial({
      color: "#ff3d00",
      metalness: 1,
      roughness: 0.06,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      envMapIntensity: 1.5,
      side: THREE.DoubleSide,
    });
    clone.traverse((obj) => {
      if (obj.isMesh) obj.material = material;
    });
    return clone;
  }, [scene]);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // Very small parallax so it feels alive
  useFrame((state) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.08, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.05, 0.05);
  });

  return (
    <group ref={group}>
      {/* The curve is flat in X/Z, so turn it to face the camera */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <Center>
          <primitive object={model} />
        </Center>
      </group>
    </group>
  );
}

export default function RingCanvas({ onReady }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ fov: 20, position: [0, 0, 5] }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <FitWidth />

      {/* Dark studio with white strips: gives the black and white bands on the tube */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={6} color="#ffffff" position={[0, 4, 2]} scale={[12, 1.2, 1]} />
        <Lightformer form="rect" intensity={4} color="#ffffff" position={[0, -3, 3]} scale={[12, 0.8, 1]} />
        <Lightformer form="rect" intensity={2} color="#ffb199" position={[-5, 0, 3]} scale={[1.5, 8, 1]} />
        <Lightformer form="rect" intensity={2} color="#ffb199" position={[5, 0, 3]} scale={[1.5, 8, 1]} />
      </Environment>

      <Suspense fallback={null}>
        <Ring onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}