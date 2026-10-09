import BrandBar from "./component/TopSectioncompo/BrandBar";
import Header from "./component/TopSectioncompo/Header";
import Footer from "./sections/FooterSection";
import Services from "./sections/Services";
import { TopSection } from "./sections/TopSection";

function App() {
  return (
    <>
      <div className="relative">
        <Header></Header>
        <main>
          

          <TopSection />
          <Services />
          {/* <Footer/> */}
        </main>
      </div>
    </>
  );
}

export default App;
