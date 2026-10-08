import BrandBar from "../component/TopSectioncompo/BrandBar";
import Scribble from "../component/TopSectioncompo/Scribble";
import Statue from "../component/TopSectioncompo/Statue";
import Top1 from "../assets/TopSectionSvg/Top1.svg";
import Top2 from "../assets/TopSectionSvg/Top2.svg";
import TopCorner1 from "../assets/BrandSVG/TopCorner.svg";
import TopCorner2 from "../assets/BrandSVG/TopCorner2.svg";
import TopCorner3 from "../assets/BrandSVG/TopCorner3.svg";

export const TopSection = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-grid relative mx-auto w-full max-w-[1440px] overflow-hidden pt-24 lg:aspect-[1440/1297] lg:pt-0"
    >
      <h1
  id="hero-heading"
  className="font-headline headline-wide text-brand text-center not-italic uppercase leading-none tracking-tighter"
>
  <img
    src={Top1}
    alt="Bold design"
    className="block h-auto w-full lg:absolute lg:left-0 lg:top-[6.25%] lg:z-10 lg:w-[94.66%]"
  />
  <span className="font-display block font-normal text-[14vw] lg:absolute lg:left-[56%] lg:top-[47.7%] lg:z-10 lg:-translate-y-1/2 lg:text-[9cqw]">
    that
  </span>
  <img
    src={Top2}
    alt="Performs"
    className="block h-auto w-full lg:absolute lg:left-[10.76%] lg:top-[63.68%] lg:z-10 lg:w-[78.44%]"
  />
</h1>
      <Statue />
        <img
          src={TopCorner1}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-[49%] z-0 hidden h-auto w-[36%] lg:block"
        />
        <img
          src={TopCorner2}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[18%] right-[3%] z-0 hidden h-auto w-[8%] lg:block"
        />
        <img
          src={TopCorner3}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[45%] right-[13%] z-0 hidden h-auto w-[9%] lg:block"
        />
      <div className="flex flex-col gap-6 px-6 pb-8 lg:contents">
        <p className="font-body text-sm font-bold uppercase leading-tight lg:absolute lg:left-[20.3%] lg:top-[39.2%] lg:z-30 lg:text-[clamp(0.75rem,1vw,1rem)]">
          <span className="block">Strategy is</span>
          <span className="relative inline-block">Cheaper</span>
          <Scribble variant="circle" className="text-brand" />
        </p>
        <p className="font-body text-xl font-bold uppercase leading-tight lg:absolute lg:left-[80.3%] lg:top-[33.7%] lg:z-30 lg:text-[clamp(0.95rem,1.8vw,1.6rem)]">
          <span className="block">Comfortable</span>
          <span className="relative inline-block">
            is Expensive
            <Scribble variant="squiggle" className="text-brand" />
          </span>
        </p>
        <p className="font-body text-3xl font-bold uppercase leading-tight lg:absolute lg:left-[5%] lg:top-[50.3%] lg:z-30 lg:text-[clamp(1.1rem,2.6vw,2.4rem)]">
          <span className="block">
            Identity<span aria-hidden="true"> ·</span>
          </span>
          <span className="block">
            Experience<span aria-hidden="true"> ·</span>
          </span>
          <span className="relative inline-block">
            Motion<span aria-hidden="true"> ·</span>
            <Scribble variant="underline" className="text-brand" />
          </span>
        </p>
      </div>
      <BrandBar />
    </section>
  );
};
