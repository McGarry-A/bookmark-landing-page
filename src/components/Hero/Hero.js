import "./Hero.css"
import HeroImage from "../../images/illustration-hero.svg"
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 className="hero-title">A Simple Bookmark Manager</h1>
                <p className="hero-text">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="hero-button-div">
                    <button className="hero-button blue">Get it on Chrome</button>
                    <button className="hero-button grey">Get it on Firefox</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={HeroImage} alt="hero"/>
                <div className="background-blue"></div>
            </div>
        </div>
    )
}

export default Hero