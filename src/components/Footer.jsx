import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">

                {/* Branding Section */}
                <div className="footer-brand">
                    <a href="#" className="studio-link">DOGSTUDIO</a>
                    <div className="lang-selector">
                        <span className="active">EN</span>
                        <span>ES</span>
                    </div>
                </div>

                {/* Columns Section */}
                <div className="footer-columns">

                    {/* Column 1: Locations */}
                    <div className="f-col">
                        <h4>OUR OFFICES</h4>
                        <ul className="f-list">
                            <li><a href="#">Chicago</a></li>
                            <li><a href="#">Amsterdam</a></li>
                            <li><a href="#">Paris</a></li>
                            {/* Added a few more to populate space if needed, or keep strictly to ref */}
                            <li><a href="#">Mexico City</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Socials */}
                    <div className="f-col">
                        <h4>FOLLOW US</h4>
                        <ul className="f-list">
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Dribbble</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="f-col">
                        <h4>SAY HELLO</h4>
                        <a href="mailto:biz@dogstudio.be" className="contact-email">biz@dogstudio.be</a>
                        <p className="contact-text">We'd love to hear from you.</p>
                    </div>
                </div>

                {/* Extras Section */}
                <div className="footer-extras">
                    <h3 className="newsletter-title">Subscribe to our newsletter</h3>
                    <div className="newsletter-form">
                        {/* Simplified form representation */}
                        <a href="#" style={{ textDecoration: 'underline', color: 'white', opacity: 0.7 }}>Sign up now -></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="big-text">WE MAKE <br /> GOOD SH*T</div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Dogstudio. All rights reserved. <br />
                    <span style={{ opacity: 0.6 }}>Privacy Policy | Terms</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
