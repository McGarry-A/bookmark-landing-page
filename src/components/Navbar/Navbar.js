import Hamburger from "../../images/icon-hamburger.svg";
import { ReactComponent as Exit } from "../../images/icon-close.svg";
import { ReactComponent as Logo } from "../../images/logo-bookmark.svg";
import "./Navbar.css";

const Navbar = () => {
  const toggleNav = () => {
    document.querySelector(".nav-hamburger").classList.toggle("hidden");

    const navList = document.querySelector(".nav-list");
    navList.style.display === "flex"
      ? (navList.style.display = "none")
      : (navList.style.display = "flex");

    console.log("clicked");
  };
  return (
    <header>
      <div className="logo-div">
        <Logo color="black" />
      </div>
      <nav>
        <ul className="nav-list mobile-nav-list">
          <li className="mobile-nav-item exit-button">
            <Exit
              onClick={toggleNav}
              className="nav-exit"
              alt="hamburger"
              fill="white"
            />
          </li>
          <li className="nav-item mobile-nav-item nav-link">Features</li>
          <li className="nav-item mobile-nav-item nav-link">Pricing</li>
          <li className="nav-item mobile-nav-item nav-link">Contact</li>
          <li className="nav-item mobile-nav-item">
            <button className="nav-cta">Login</button>
          </li>
        </ul>
        <div className="mobile-nav">
          <img
            onClick={toggleNav}
            className="nav-hamburger"
            src={Hamburger}
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
