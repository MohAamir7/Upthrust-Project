import ExternalLink from "./ExternalLink";

export default function FooterLegal() {
  return (
    <div className="mt-8">
      <nav className="flex flex-wrap gap-6" aria-label="Website links">
        <ExternalLink href="https://upthrust.agency">upthrust.agency</ExternalLink>
        <ExternalLink href="https://upthrust.io">upthrust.io</ExternalLink>
      </nav>
      <div className="mt-[94px] text-sm leading-[1.35] max-[900px]:mt-[50px]">
        <p>Instagram, LinkedIn</p>
        <a className="mt-[17px] block text-[#777] no-underline" href="/privacy-policy">Privacy Policy</a>
        <p>© Upthrust Design</p>
      </div>
    </div>
  );
}