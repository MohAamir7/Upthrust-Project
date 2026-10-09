import AgencyColumn from "../component/FooterSectionCompo/AgencyColoum";
import NewsletterForm from "../component/FooterSectionCompo/NewsLetterForm";
import BrandMark from "../component/FooterSectionCompo/BrandMark";

import FooterLegal from "../component/FooterSectionCompo/FooterLegel";

export default function Footer() {
  return (
    <footer className="upthrust-footer">
      <div className="upthrust-wordmark-wrap" aria-label="Upthrust Design">
        <h2 className="upthrust-wordmark">
          <span>UPTHRUST</span>
          <span className="upthrust-wordmark-mark"><BrandMark /></span>
          <span>DESIGN</span>
        </h2>
      </div>

      <div className="upthrust-footer-body">
        <div className="upthrust-footer-left">
          <div className="upthrust-agency-grid">
            <AgencyColumn url="https://upthrust.agency" email="hello@upthrust.agency" />
            <AgencyColumn url="https://upthrust.io" email="hello@upthrust.io" />
          </div>
          <p className="upthrust-placeholder-copy">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        <div className="upthrust-footer-right">
          <NewsletterForm />
          <FooterLegal />
        </div>
      </div>
    </footer>
  );
}
