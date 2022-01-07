import BookmarkLogo from "../../images/logo-bookmark.svg"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <div className="logo-div">
                <img src={BookmarkLogo} alt="logo"/>
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">Features</li>
                    <li className="nav-item">Pricing</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item"><button className="nav-cta">Login</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar