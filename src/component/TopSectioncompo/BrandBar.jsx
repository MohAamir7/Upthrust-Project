import zomato from "../../assets/BrandSVG/zomato.svg"
import dell from "../../assets/BrandSVG/Dell.svg"
import loreal from "../../assets/BrandSVG/Loreal.svg"
import bosch from "../../assets/BrandSVG/Bosch.svg"
import vega from "../../assets/BrandSVG/Vega.svg"
import brand from "../../assets/BrandSVG/Brands.svg"

export default function BrandBar() {
    const LOGOS = [
      {id:"count",name:"total",src:brand},
  { id: "zomato", name: "Zomato", src: zomato },
  { id: "bosch", name: "Bosch", src: bosch },
  { id: "loreal", name: "L'Oréal", src: loreal },
  { id: "vega", name: "Vega", src: vega },
  { id: "dell", name: "Dell", src: dell },
  { id: "loreal-2", name: "L'Oréal", src: loreal },
  
];
  return (
    <div className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-black/20 px-6 py-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[11.1%] lg:px-10 lg:py-10">
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