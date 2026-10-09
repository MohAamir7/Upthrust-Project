// Curved "mesh" background: a regular grid pushed through a warp function,
// so every line bends and the cells look like curved boxes (as in the Figma design).
// Built once at module load as a single SVG path: no images, no runtime cost.

const W = 1440;
const H = 810;
const COLS = 28; // vertical lines
const ROWS = 16; // horizontal lines
const STEPS = 64; // points per line (higher = smoother curves)
const PAD = 0.08; // extend past the edges so no gaps show when lines bend

function warp(u, v) {
  const x =
    u * W +
    52 * Math.sin(v * 4.6 + u * 3.0) +
    8 * Math.sin(v * 11 - u * 2.4);
  const y =
    v * H +
    58 * Math.sin(u * 5.6 + v * 2.4) +
    7 * Math.sin(u * 13 + v * 5);
  return [x, y];
}

function line(points) {
  return points
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join("");
}

function buildPath() {
  const parts = [];
  const lo = -PAD;
  const span = 1 + PAD * 2;

  for (let c = 0; c <= COLS; c++) {
    const u = lo + (c / COLS) * span;
    const pts = [];
    for (let s = 0; s <= STEPS; s++) pts.push(warp(u, lo + (s / STEPS) * span));
    parts.push(line(pts));
  }
  for (let r = 0; r <= ROWS; r++) {
    const v = lo + (r / ROWS) * span;
    const pts = [];
    for (let s = 0; s <= STEPS; s++) pts.push(warp(lo + (s / STEPS) * span, v));
    parts.push(line(pts));
  }
  return parts.join("");
}

const PATH = buildPath();

export default function WarpGrid({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <path
        d={PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}