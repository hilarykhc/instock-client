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
        <div className="header__nav">
          <Link to="/" className="header__nav-warehouse">
            <p>Warehouse</p>
          </Link>
          <Link to="/inventory" className="header__nav-inventory">
            <p>Inventory</p>
          </Link>
        </div>
      </section>
    </header>
  );
}
