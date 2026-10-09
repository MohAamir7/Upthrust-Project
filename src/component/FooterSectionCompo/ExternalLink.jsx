
export default function ExternalLink({ href, children }) {
  return (
    <a className="upthrust-link" href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="h-4 w-4"
      >
        <path
          d="M4 12 12 4M5 4h7v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}