import "./Header.scss";
import { Link } from "react-router-dom";
import instockLogo from "../../assets/Logo/InStock-Logo_1x.png";

export default function Header() {
  return (
    <header className="header">
      <section className="header__wrapper">
        <Link to="/" className="header__link">
          <img className="header__logo" src={instockLogo} alt="instock logo" />
        </Link>
        <ul className="header__nav">
          <Link to="/" className="header__nav-item header__nav-item--active">
            <li>Warehouse</li>
          </Link>
          <Link to="/inventory" className="header__nav-item">
            <li>Inventory</li>
          </Link>
        </ul>
      </section>
    </header>
  );
}
