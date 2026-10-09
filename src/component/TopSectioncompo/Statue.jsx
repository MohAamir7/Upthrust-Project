import { lazy, Suspense, useCallback, useEffect, useState } from "react";

// three.js is only downloaded when this import() runs
const StatueCanvas = lazy(() => import("../model3D/StatueCanvas"));

export default function Statue() {
  const [enable3D, setEnable3D] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleReady = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    // Desktop only: phones keep the lightweight placeholder / image
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const start = () => setEnable3D(true);
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(start, { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1200);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      role="img"
      aria-label="Iridescent classical bust"
      className="relative mx-auto my-6 h-[420px] w-[80%] max-w-md lg:absolute lg:left-[31.04%] lg:top-[19.22%] lg:z-20 lg:m-0 lg:h-[min(76.1vh,685px)] lg:w-[35.92%] lg:max-w-none"
    >
      {/* Placeholder: fades out once the 3D model is ready.
          Later this becomes the pre-rendered statue image (best for LCP). */}
      <div
        className={`absolute inset-0 grid place-items-center rounded-[45%_45%_6%_6%] bg-linear-to-b from-[#1b1f5e] to-[#0a0a2a] text-xs uppercase tracking-widest text-white/60 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        Statue render
      </div>

      {enable3D && (
        <Suspense fallback={null}>
          <StatueCanvas onReady={handleReady} />
        </Suspense>
      )}
    </div>
  );
}