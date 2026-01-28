import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
    CrossIcon,
    HumburgIcon,
    NavBar,
    SearchIcon
} from "./NavStyle";
import { Link } from "react-router";
import { useCart } from "../contextApi/CartContext"
import CartIcon from "../Cart/CartIcon";
import { Icon } from '../../Images'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);


    const { cart } = useCart()

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 1160;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <NavBar>
            <div className="logo">
                {isMobile && (
                    <div className="icon-wrapper" onClick={() => setMenuOpen(!menuOpen)}>
                        <HumburgIcon className={menuOpen ? "hide" : "show"} />
                        <CrossIcon className={menuOpen ? "show" : "hide"} />

                    </div>
                )}
                <a href="/">SHOP.CO</a>
            </div>
            <ul className="web-menu">
                <li onClick={() => setShopOpen(!shopOpen)} className="has-dropdown">Shop <FaChevronDown />
                    <span className="arrow">

                    </span>
                    <ul className={`dropdown ${shopOpen ? "show" : ""}`}>
                        <li>TShirt</li>
                        <li>Jeans</li>
                        <li>Shirt</li>
                    </ul>
                </li>
                <a href="#onsale"><li onClick={() => setMenuOpen(false)}>On Sale</li></a>
                <a href="#newarrival"> <li onClick={() => setMenuOpen(false)}>New Arrivals</li></a>
                <a href="#brand"> <li onClick={() => setMenuOpen(false)}>Brands</li></a>
            </ul>
            <ul className={`mob-menu  ${menuOpen ? " open" : ""}`}>
                <li onClick={() => setShopOpen(!shopOpen)} className="has-dropdown">Shop
                    <span className="arrow">
                        <FaChevronDown />
                    </span>
                    <ul className={`dropdown ${shopOpen ? "show" : ""}`}>
                        <li>TShirt</li>
                        <li>Jeans</li>
                        <li>Shirt</li>
                    </ul>
                </li>
                <a href="#onsale"><li onClick={() => setMenuOpen(false)}>On Sale</li></a>
                <a href="#newarrival"> <li onClick={() => setMenuOpen(false)}>New Arrivals</li></a>
                <a href="#brand"> <li onClick={() => setMenuOpen(false)}>Brands</li></a>
            </ul>

            <div className="nav-icon">
                {!isMobile && (
                    <div className="input-wrapper">
                        <SearchIcon />
                        <input type="text" placeholder="Search for products..." />
                    </div>
                )}



                {isMobile && <SearchIcon />}
                <Link to="/cart">
                    <CartIcon />
                </Link>
                <img src={Icon.UserIcon} alt="Not Upload" />
            </div>
        </NavBar>
    );
};

export default Nav;



