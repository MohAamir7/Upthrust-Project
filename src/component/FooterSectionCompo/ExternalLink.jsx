
export default function ExternalLink({ href, children }) {
  return (
    <a
      className="inline-flex items-center gap-[7px] text-sm leading-[1.25] text-inherit underline [text-underline-offset:2px] max-[520px]:gap-1 max-[520px]:text-xs"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="h-[13px] w-[13px] flex-none max-[520px]:h-[11px] max-[520px]:w-[11px]"
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