import "./footer.scss";
import Logo from "../resources/Logo_black.svg";
import LogoBeans from "../resources/Beans_logo_black.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={Logo} alt="Coffee house logo" className="footer__logo" />
        <nav className="footer__nav">
          <ul>
            <li>
              <a href="#our-coffee">Our coffee</a>
            </li>
            <li>
              <a href="#pleasure">For your pleasure</a>
            </li>
          </ul>
        </nav>
      </div>
      <img className="footer__logo-img" src={LogoBeans} alt="LogoBeans" />
    </footer>
  );
};

export default Footer;
