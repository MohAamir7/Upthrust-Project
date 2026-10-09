import ExternalLink from "./ExternalLink";

export default function AgencyColumn({ url, email }) {
  return (
    <section className="min-w-0">
      <ExternalLink href={url}>{url.replace(/^https?:\/\//, "")}</ExternalLink>
      <div className="mt-[45px] text-sm leading-[1.35] max-[520px]:mt-[30px] max-[520px]:[overflow-wrap:anywhere] max-[520px]:text-xs">
        <p>add description here</p>
        <a className="text-[#777] no-underline" href={`mailto:${email}`}>{email}</a>
      </div>
    </section>
  );
}