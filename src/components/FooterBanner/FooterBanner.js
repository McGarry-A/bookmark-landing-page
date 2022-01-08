import "./FooterBanner.css"

const FooterBanner = () => {
    return (
    <div className="footer-banner">
        <div className="footer-banner-container">
            <h5 className="footer-banner-text">35,000+ already joined</h5>
            <h2 className="footer-banner-title">Stay up-to-date with what we're doing</h2>
            <div className="footer-contact-us">
                <input placeholder="Enter your email address"/>
                <button>Contact Us</button>
            </div>
        </div>
    </div>
    )
}

export default FooterBanner