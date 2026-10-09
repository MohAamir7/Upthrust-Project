import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";

const RingCanvas = lazy(() => import("./RingCanvas"));

export default function RingBackground() {
  const ref = useRef(null);
  const [enable3D, setEnable3D] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleReady = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    // Desktop only. Phones keep the lightweight glow.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnable3D(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0">
      <div
        className={`ring-fallback absolute inset-0 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {enable3D && (
        <Suspense fallback={null}>
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <RingCanvas onReady={handleReady} />
          </div>
        </Suspense>
      )}
    </div>
  );
}