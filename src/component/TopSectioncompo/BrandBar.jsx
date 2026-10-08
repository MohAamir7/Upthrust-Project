import zomato from "../../assets/BrandSVG/zomato.svg"
import dell from "../../assets/BrandSVG/Dell.svg"
import loreal from "../../assets/BrandSVG/Loreal.svg"
import bosch from "../../assets/BrandSVG/Bosch.svg"
import vega from "../../assets/BrandSVG/Vega.svg"

export default function BrandBar() {
    const LOGOS = [
  { id: "zomato", name: "Zomato", src: zomato },
  { id: "bosch", name: "Bosch", src: bosch },
  { id: "loreal", name: "L'Oréal", src: loreal },
  { id: "vega", name: "Vega", src: vega },
  { id: "dell", name: "Dell", src: dell },
  { id: "loreal-2", name: "L'Oréal", src: loreal },
];
  return (
    <div className="mx-auto flex max-w-\[1440px] items-center justify-between px-6 py-5 lg:px-[5%] lg:py-7">
      {LOGOS.map((logo) => (
        <img
          key={logo.id}
          src={logo.src}
          alt={`${logo.name} logo`}
          className="h-8 w-auto lg:h-10"
        />
      ))}
      <img src={bosch} alt="Bosch logo" className="h-8 w-auto lg:h-10" />
    </div>
  )
}