export default function Collage({ label, images, className = "" }) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`relative grid grid-cols-\[repeat(24,minmax(0,1fr))] grid-rows-\[repeat(10,minmax(0,1fr))] gap-1 overflow-hidden ${className}`}
    >
      {images.map((img) => (
        <div
          key={img.id}
          className="relative min-h-0 min-w-0 overflow-hidden rounded-[3px]"
          style={{
            gridColumn: img.col,
            gridRow: img.row,
            backgroundColor: img.tint ?? "#f1f1f1",
          }}
        >
          {img.src ? (
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <span
              role="img"
              aria-label={img.alt}
              className="absolute inset-0 grid place-items-center text-[0.75cqw] uppercase tracking-widest text-ink/40"
            >
              {img.id}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
