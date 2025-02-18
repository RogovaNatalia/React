import About from "../about/about";
import Header from "../header/header";
import HeroSection from "../hero-section/hero-section";
import BestProducts from "../best-products/best-products";
import Footer from "../footer/footer";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <HeroSection />
      </div>
      <About />
      <BestProducts />
      <Footer />
    </div>
  );
}

export default App;
