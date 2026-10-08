export const Statue = () => {
  return (
    <div className="relative mx-auto my-6 h-\[420px] w-[80%] max-w-md lg:absolute lg:left-[31%] lg:top-[19%] lg:z-20 lg:m-0 lg:h-[50%] lg:w-[38%] lg:max-w-none">
      {/* PLACEHOLDER: later replace with the rendered statue image,
          then lazy-load the 3D canvas on top of it */}
      <div
        role="img"
        aria-label="Iridescent classical bust (placeholder)"
        className="grid h-full w-full place-items-center rounded-[45%_45%_6%_6%] bg-linear-to-b from-[#1b1f5e] to-[#0a0a2a] text-xs uppercase tracking-widest text-white/60"
      >
        Statue render
      </div>
    </div>
  );
};
