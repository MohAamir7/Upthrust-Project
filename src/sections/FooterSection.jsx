import AgencyColumn from "../component/FooterSectionCompo/AgencyColoum";
import NewsletterForm from "../component/FooterSectionCompo/NewsLetterForm";
import BrandMark from "../component/FooterSectionCompo/BrandMark";

import FooterLegal from "../component/FooterSectionCompo/FooterLegel";

export default function Footer() {
  return (
    <footer className="relative min-h-[900px] w-full overflow-hidden bg-black font-[Arial,Helvetica,sans-serif] text-[#f7f7f7] max-[900px]:min-h-screen">
      <div
        className="flex h-[50.1%] min-h-[450px] items-end border-b border-[#8b8b8b] px-[5.1%] pb-[0.5%] max-[900px]:h-[43vh] max-[900px]:min-h-[300px] max-[900px]:px-[4%] max-[900px]:pb-3 max-[520px]:h-[32vh] max-[520px]:min-h-[210px] max-[520px]:px-[4%] max-[520px]:pb-[10px]"
        aria-label="Upthrust Design"
      >
        <h2 className="origin-left m-0 flex w-full scale-x-100 items-end justify-between gap-[0.025em] whitespace-nowrap font-[Roboto_Condensed,Impact,'Arial_Narrow',sans-serif] text-[clamp(4.5rem,15.6vw,15.1rem)] font-black leading-[0.83] tracking-[-0.065em] min-[901px]:scale-x-[0.78] min-[1600px]:text-[min(15.6vw,15.1rem)] max-[900px]:text-[clamp(3.1rem,14.6vw,8.5rem)] max-[900px]:tracking-[-0.07em] max-[520px]:text-[13.5vw] max-[520px]:tracking-[-0.075em]">
          <span>UPTHRUST</span>
          <span className="relative z-[1] mb-[0.01em] ml-[-0.005em] mr-[-0.015em] flex h-[0.53em] w-[0.53em] flex-[0_0_0.53em] items-center justify-center max-[520px]:h-[0.42em] max-[520px]:w-[0.42em] max-[520px]:flex-[0_0_0.42em]">
            <BrandMark />
          </span>
          <span>DESIGN</span>
        </h2>
      </div>

      <div className="grid min-h-[419px] grid-cols-[61.6%_38.4%] max-[900px]:grid-cols-1">
        <div className="flex min-w-0 flex-col justify-between py-[22px] pl-[1.4%] pr-[2.2%] max-[900px]:min-h-[300px] max-[900px]:px-[4%] max-[900px]:py-6">
          <div className="grid grid-cols-2 gap-6 max-[520px]:gap-3">
            <AgencyColumn url="https://upthrust.agency" email="hello@upthrust.agency" />
            <AgencyColumn url="https://upthrust.io" email="hello@upthrust.io" />
          </div>
          <p className="mt-10 mb-0 text-sm leading-[1.4] text-[#777] max-[520px]:text-xs">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        <div className="flex min-w-0 flex-col justify-between border-l border-[#8b8b8b] py-[21px] pl-[3.7%] pr-[5.5%] pb-[22px] max-[900px]:min-h-[350px] max-[900px]:border-t max-[900px]:border-l-0 max-[900px]:px-[4%] max-[900px]:py-6">
          <NewsletterForm />
          <FooterLegal />
        </div>
      </div>
    </footer>
  );
}
