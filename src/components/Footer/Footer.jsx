import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FooterStyle } from './FooterStyle';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CardIcon } from '../../Images';
const Footer = () => {
    return (
        <FooterStyle>
            <div className="stayUptodate">
                <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className="message">
                    <div className="input">
                        <TfiEmail style={{ border: "none" }} />
                        <input type="email" placeholder='Enter your email address' />
                    </div>
                    <button>Subscribe to Newsletter</button>
                </div>
            </div>
            <div className="footer-row-2">
                <div className="wrapper-footer-row">
                    <div className="row-2-col-1">
                        <h1>SHOP.CO</h1>
                        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="icons">
                            <FaTwitter />
                            <FaFacebookF style={{ backgroundColor: "black", color: "white" }} />
                            <FaInstagram />
                            <FaGithub />
                        </div>
                    </div>
                    <div className="row-2-col-2">
                        <span>Company</span>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="row-2-col-2">
                        <span>Help</span>
                        <ul>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="row-2-col-2">
                        <span>FAQ</span>
                        <ul>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>
                    <div className="row-2-col-2">
                        <span>Resources</span>
                        <ul>
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-last-row">
                    <span>Shop.co © 2000-2023, All Rights Reserved</span>
                    <div className="cards-icon">
                        <img src={CardIcon.Visa} alt="Visa Card" />
                        <img src={CardIcon.Master} alt="Master Card" />
                        <img src={CardIcon.PayPal} alt="PayPal Card" />
                        <img src={CardIcon.Apple} alt="Apple" />
                        <img src={CardIcon.Google} alt="Google" />
                    </div>
                </div>
            </div>

        </FooterStyle >
    )
}

export default Footer
