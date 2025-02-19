import { Routes, Route, Outlet } from "react-router";
import Header from "../header/header";
import HeroSection from "../hero-section/hero-section";
import Footer from "../footer/footer";
import Home from "../home/home";
import About from "../about/about";
import Pleasure from "../pleasure/pleasure";
import "./app.scss";

const Layout = ({ title, page }) => (
  <>
    <HeroSection title={title} page={page} />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Layout title="" page="home" />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          path="about"
          element={<Layout title="Our Coffee" page="about" />}
        >
          <Route index element={<About />} />
          {/* <Route path=":coffeeId" element={<CoffeeDetails />} /> */}
        </Route>
        <Route
          path="pleasure"
          element={<Layout title="For Your Pleasure" page="pleasure" />}
        >
          <Route index element={<Pleasure />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
