import RingBackground from "../component/ServiceSection/RingBackground";
import { SERVICES } from "../Data/ServicesData.js";
import WarpGrid from "../component/ServiceSection/ServiceBackGrid.jsx";
import Collage from "../component/ServiceSection/CollageBox.jsx";

export default function Services() {
  // One slide for now; more slides come later
  const slide = SERVICES[0];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-black text-paper"
    >
      <div className="@container relative mx-auto w-full max-w-[1440px] overflow-hidden lg:aspect-[1440/810]">
        <RingBackground />
        <WarpGrid className="z-10 text-white/20" />

        {/* Stacked on mobile, placed on the 1440x810 canvas from lg up */}
        <div className="relative z-20 flex flex-col gap-10 px-6 py-16 lg:contents">
          {/* Eyebrow + heading */}
          <div className="lg:absolute lg:left-[3%] lg:top-[17%] lg:z-20">
            <p className="font-body text-sm uppercase tracking-wide lg:text-[1.1cqw]">
              {slide.eyebrow}
            </p>
            <h2
              id="services-heading"
              className="font-body text-5xl font-semibold leading-none tracking-[-0.04em] lg:text-[5.75cqw]"
            >
              {slide.title}
            </h2>
          </div>

          {/* Collage card */}
          <Collage
            label={slide.collage.label}
            images={slide.collage.images}
            className="aspect-[3/2] lg:absolute lg:left-[8.5%] lg:top-[41.3%] lg:z-20 lg:aspect-auto lg:h-[40.7%] lg:w-[34%]"
          />

          {/* Text block */}
          <div className="lg:absolute lg:left-[53.5%] lg:top-[41.1%] lg:z-20 lg:w-[33.3%]">
            <p className="font-body text-lg font-medium leading-[1.4] lg:text-[1.39cqw]">
              {slide.intro}
            </p>

            <ul className="font-body mt-6 flex list-none flex-col gap-3 p-0 text-lg font-medium lg:mt-[2.2cqw] lg:gap-[0.8cqw] lg:text-[1.39cqw]">
              {slide.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 leading-[1.4] lg:gap-[0.8cqw]"
                >
                  <span aria-hidden="true">✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={slide.cta.href}
              className="font-body mt-8 inline-flex items-center justify-center bg-white px-8 py-4 text-2xl font-bold uppercase tracking-tight text-brand transition-colors hover:bg-brand hover:text-white lg:mt-[2.7cqw] lg:h-[4.3cqw] lg:w-[13.3cqw] lg:p-0 lg:text-[1.95cqw]"
            >
              {slide.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
