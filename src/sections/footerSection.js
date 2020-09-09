import React from "react";
import Input from "../components/input";
import Button from "../components/buttons";
export default function Footer() {
    return (
        <footer className="footer">
            <section>
                <div className="logo"></div>
                <div className="social-logo"></div>
            </section>
            <section>
                <p>Home</p>
                <p>Pricing</p>
                <p>Products</p>
                <p>About Us</p>
            </section>
            <section>
                <p>Careers</p>
                <p>Community</p>
                <p>Privacy Policy</p>
            </section>
            <section>
                <div>
                    <Input type="text" placeholder="Updates in your inbox…" />
                    <Button text="Go" />
                </div>
                <p>&copy; Copyright 2020. All Rights Reserved</p>
            </section>
        </footer>
    );
}
