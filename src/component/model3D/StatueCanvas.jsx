import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, Environment, Lightformer, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/statue.glb";

function Statue({ onReady }) {
  const { scene } = useGLTF(MODEL_URL);
  const group = useRef();

  // Replace the exported plain-metal material with an iridescent one
  const model = useMemo(() => {
    const clone = scene.clone(true);
    const material = new THREE.MeshPhysicalMaterial({
      color: "#0a0f4a",
      metalness: 1,
      roughness: 0.16,
      iridescence: 1,
      iridescenceIOR: 1.8,
      iridescenceThicknessRange: [250, 900],
      envMapIntensity: 1.6,
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

  // Gentle follow-the-mouse rotation
  useFrame((state) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.5;
    const targetX = -state.pointer.y * 0.15;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.06);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.06);
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={model} />
      </Center>
    </group>
  );
}

export default function StatueCanvas({ onReady }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      {/* Coloured light panels create the rainbow reflections */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} color="#ff4200" position={[0, 5, -5]} scale={[10, 5, 1]} />
        <Lightformer form="rect" intensity={3} color="#4fd1ff" position={[-5, 1, 2]} scale={[5, 8, 1]} />
        <Lightformer form="rect" intensity={3} color="#ff5ec4" position={[5, -1, 2]} scale={[5, 8, 1]} />
        <Lightformer form="ring" intensity={2} color="#ffffff" position={[0, 0, 5]} scale={4} />
      </Environment>

      <Suspense fallback={null}>
        <Bounds fit observe margin={1.15}>
          <Statue onReady={onReady} />
        </Bounds>
      </Suspense>
    </Canvas>
  );
}