import Hamburger from "../../images/icon-hamburger.svg"
import {ReactComponent as Logo} from "../../images/logo-bookmark.svg"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <div className="logo-div">
                <Logo color="black"/>
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">Features</li>
                    <li className="nav-item">Pricing</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item"><button className="nav-cta">Login</button></li>
                    <li><img className="nav-hamburger" src={Hamburger} alt="hamburger"/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar