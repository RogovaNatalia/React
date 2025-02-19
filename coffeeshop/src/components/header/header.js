import "./header.scss";
import Logo from "../resources/Logo.svg";

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <div className="container">
        <img
          src={Logo}
          alt="Coffee house logo"
          className="header__logo"
          onClick={() => setPage("home")}
        />
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#our-coffee" onClick={() => setPage("aboutCoffe")}>
                Our coffee
              </a>
            </li>
            <li>
              <a href="#pleasure" onClick={() => setPage("pleasure")}>
                For your pleasure
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
