import ExternalLink from "./ExternalLink";

export default function FooterLegal() {
  return (
    <div className="upthrust-legal">
      <nav className="upthrust-footer-links" aria-label="Website links">
        <ExternalLink href="https://upthrust.agency">upthrust.agency</ExternalLink>
        <ExternalLink href="https://upthrust.io">upthrust.io</ExternalLink>
      </nav>
      <div className="upthrust-legal-bottom">
        <p>Instagram, LinkedIn</p>
        <a href="/privacy-policy">Privacy Policy</a>
        <p>© Upthrust Design</p>
      </div>
    </div>
  );
}