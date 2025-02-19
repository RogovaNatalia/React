import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import About from "../about/about";
import Header from "../header/header";
import HeroSection from "../hero-section/hero-section";
import BestProducts from "../best-products/best-products";
import Footer from "../footer/footer";
import AboutBeans from "../aboutBeans/aboutBeans";
import "./app.scss";

function App() {
  const [page, setPage] = useState("home");

  const getHeroSectionMarginTop = () => {
    switch (page) {
      case "aboutCoffe":
        return "50px"; // Отступ для страницы "Our Coffee"
      case "pleasure":
        return "30px"; // Отступ для страницы "For Your Pleasure"
      default:
        return "111px"; // Отступ для домашней страницы
    }
  };

  return (
    <div className="app">
      <div
        className={`app__container ${
          page === "aboutCoffe"
            ? "about-page"
            : page === "pleasure"
            ? "pleasure-page"
            : ""
        }`}
      >
        <Header setPage={setPage} />
        <Routes>
          <Route index element={<p>home</p>} />
          <Route path="about">
            <Route index element={<p>about</p>} />
            <Route path=":coffeeId" element={<p>Coffee by id</p>} />
          </Route>
          <Route path="pleasure" element={<p>pleasure</p>} />
        </Routes>
        <Link to="/">To home</Link>
        <Link to="/about">To about</Link>
        <Link to="/about/my-coffee-id">To about by coffee id</Link>
        <Link to="/pleasure">To pleasure</Link>
        {page === "home" && (
          <HeroSection marginTop={getHeroSectionMarginTop()} />
        )}
        {page === "aboutCoffe" && (
          <HeroSection
            title="Our Coffee"
            marginTop={getHeroSectionMarginTop()}
          />
        )}
        {page === "pleasure" && (
          <HeroSection
            title="For Your Pleasure"
            marginTop={getHeroSectionMarginTop()}
          />
        )}
      </div>
      {page === "home" && (
        <>
          <About />
          <BestProducts />
        </>
      )}
      {page === "aboutCoffe" && (
        <>
          <AboutBeans />
        </>
      )}
      {/* {page === "aboutCoffe" && (
        <>
          < />
        </>
      )} */}
      <Footer />
    </div>
  );
}

export default App;
