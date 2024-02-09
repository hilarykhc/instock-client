import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import instockLogo from "../../assets/Logo/InStock-Logo_1x.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeNav, setActiveNav] = useState("warehouses");
  const location = useLocation();

  const handleNavClick = (item) => {
    setActiveNav(item);
  };

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname == "/") {
      setActiveNav("warehouses");
    } else if (pathname == "/inventory") {
      setActiveNav("inventory");
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <section className="header__wrapper">
        <Link to="/" className="header__link">
          <img className="header__logo" src={instockLogo} alt="Instock Logo" />
        </Link>
        <ul className="header__nav">
          <Link
            to="/"
            className={`header__nav-item ${
              activeNav === "warehouses" ? "header__nav-item--active" : ""
            }`}
            onClick={() => handleNavClick("warehouses")}
          >
            <li>Warehouses</li>
          </Link>
          <Link
            to="/inventory"
            className={`header__nav-item ${
              activeNav === "inventory" ? "header__nav-item--active" : ""
            }`}
            onClick={() => handleNavClick("inventory")}
          >
            <li>Inventory</li>
          </Link>
        </ul>
      </section>
    </header>
  );
}
