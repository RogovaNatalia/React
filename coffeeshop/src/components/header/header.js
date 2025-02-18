import "./header.scss";
import Logo from "../resources/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="Coffee house logo" className="header__logo" />
        <nav className="header__nav">
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
    </header>
  );
};

export default Header;
