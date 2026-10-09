import ExternalLink from "./ExternalLink";

export default function AgencyColumn({ url, email }) {
  return (
    <section className="upthrust-agency-column">
      <ExternalLink href={url}>{url.replace(/^https?:\/\//, "")}</ExternalLink>
      <div className="upthrust-agency-copy">
        <p>add description here</p>
        <a className="upthrust-muted-link" href={`mailto:${email}`}>{email}</a>
      </div>
    </section>
  );
}