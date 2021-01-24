import React from "react";
import Button from "./buttons";
import Hamburger from "../sections/hamburger-menu";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo"></div>

                <ul className="navbar-mid-contents">
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Community</li>
                </ul>

                <Button text="Get Started" />
                <Hamburger />
            </nav>
        </header>
    );
}
