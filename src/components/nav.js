import React from "react";
import Button from "./buttons";
export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo"></div>

                <div className="navbar-mid-contents">
                    <p>Pricing</p>
                    <p>Product</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Community</p>
                </div>

                <Button text="Get Started" />
            </nav>
        </header>
    );
}
