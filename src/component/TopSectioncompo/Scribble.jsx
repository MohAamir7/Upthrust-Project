const SHAPES = {
  circle: {
    viewBox: "0 0 120 48",
    d: "M64 4C30 1 6 11 6 25c0 13 24 21 58 20 33-1 53-10 51-22C113 10 92 3 58 6",
    position: "absolute -left-2 -top-1 h-[calc(100%+0.5rem)] w-[calc(100%+1rem)]",
  },
  squiggle: {
    viewBox: "0 0 100 8",
    d: "M0 4Q6 0 12 4T24 4T36 4T48 4T60 4T72 4T84 4T96 4",
    position: "absolute -bottom-1.5 left-0 h-2 w-full",
  },
  underline: {
    viewBox: "0 0 100 8",
    d: "M2 5C20 2 40 7 60 4S90 5 98 3",
    position: "absolute -bottom-1.5 left-0 h-2 w-full",
  },
};

export default function Scribble({ variant, className = "" }) {
  const { viewBox, d, position } = SHAPES[variant];

  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={`pointer-events-none overflow-visible ${position} ${className}`}
    >
      <path d={d} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}