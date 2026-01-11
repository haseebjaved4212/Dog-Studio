import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-branding">
                    <h2>DOGSTUDIO</h2>
                    <p>
                        We make good shit using art, design, and technology.
                        Creating emotional experiences that connect brands with people.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Sitemap</h3>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Socials</h3>
                    <ul className="footer-links">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Vimeo</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dogstudio. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
