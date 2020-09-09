import React from "react";
import Button from "../components/buttons";
export default function Banner() {
    return (
        <section className="banner">
            <article className="banner-text">
                Simplify how your team works today
            </article>
            <Button changeClass="invert-color" text="Get Started" />
        </section>
    );
}
