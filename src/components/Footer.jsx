import React from 'react';
import './Footer.css';
import 'remixicon/fonts/remixicon.css'; // Assuming remixicon is used based on App.jsx usage

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-branding">
                <h2>DOGSTUDIO</h2>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>

            <nav className="footer-nav">
                <a href="#">Work</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Careers</a>
            </nav>

            <div className="footer-socials">
                <a href="#" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
                <a href="#" aria-label="Twitter"><i className="ri-twitter-x-line"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
