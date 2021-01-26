import React from "react";
import Button from "./buttons";
import Anchor from "./anchor";

export default function Navbar() {
    function get(element) {
        return document.querySelector(element);
    }

    function handleMenu() {
        const hamburgerIconDiv = get(".hamburger-icon-div");
        const hamburgerCloseDiv = get(".hamburger-close-div");
        const hamburgerMenuDiv = get(".hamburger-menu-div");
        const menu = get("#menu");

        menu.classList.add("open-menu");

        hamburgerIconDiv.style.display = "none";
        hamburgerCloseDiv.style.display = "block";
        hamburgerMenuDiv.style.display = "block";
    }

    function handleClose() {
        const hamburgerIconDiv = get(".hamburger-icon-div");
        const hamburgerCloseDiv = get(".hamburger-close-div");
        const hamburgerMenuDiv = get(".hamburger-menu-div");
        const menu = get("#menu");

        console.log("close");

        menu.classList.remove("open-menu");

        hamburgerIconDiv.style.display = "flex";
        hamburgerCloseDiv.style.display = "none";
        hamburgerMenuDiv.style.display = "none";
        // menu.style.display = "none";
    }

    return (
        <header>
            <nav className="navbar">
                <div className="logo"></div>

                <div onClick={handleMenu} className="hamburger-icon-div">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div onClick={handleClose} className="hamburger-close-div">
                    <div></div>
                    <div></div>
                </div>
                <div className="hamburger-menu-div">
                    <ul id="menu" className="navbar-mid-contents">
                        <li>
                            <Anchor name="pricing" link="#" />
                        </li>
                        <li>
                            <Anchor name="product" link="#" />
                        </li>
                        <li>
                            <Anchor name="about us" link="#" />
                        </li>
                        <li>
                            <Anchor name="careers" link="#" />
                        </li>
                        <li>
                            <Anchor name="community" link="#" />
                        </li>
                    </ul>
                </div>

                <Button text="Get Started" />
            </nav>
        </header>
    );
}
