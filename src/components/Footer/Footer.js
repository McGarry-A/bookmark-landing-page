import "./Footer.css";
import { ReactComponent as Logo } from "../../images/logo-bookmark.svg";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left-col">
        <ul className="footer-left-list">
          <Logo color="white" className="footer-nav-item" />
          <li className="footer-nav-item">Features</li>
          <li className="footer-nav-item">Pricing</li>
          <li className="footer-nav-item">Contact</li>
        </ul>
      </div>
      <div className="footer-right-col">
        <ul className="footer-socials">
          <li className="footer-social-link">
            <Facebook fill="white" className="footer-social-item" />
          </li>
          <li className="footer-social-link">
            <Twitter fill="white" className="footer-social-item"/>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
