import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/apclogo.webp" alt="APC Logo" className="footer-logo-img" />
                        <h3>BOLA AHMED TINUBU</h3>
                        <p>For President - APC</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/manifesto">Manifesto</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>Email: info@tinubuforpresident.ng</p>
                        <p>Phone: +234 123 456 7890</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Bola Ahmed Tinubu for President. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;