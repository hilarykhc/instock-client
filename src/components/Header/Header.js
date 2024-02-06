import "./Header.scss";
import { Link } from "react-router-dom";
import instockLogo from "../../assets/Logo/InStock-Logo_2x.png";

export default function Header() {
  return (
    <header className="header">
      <section className="header__wrapper">
        <Link to="/" className="header__link">
          <img className="header__logo" src={instockLogo} alt="instock logo" />
        </Link>
      </section>
    </header>
  );
}
