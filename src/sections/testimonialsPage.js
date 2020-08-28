import React from "react";
import Button from "../components/buttons";

export default function TestimonialPage() {
    return (
        <section className="testimonials-page">
            <header className="header">
                <h3>What they've said</h3>
            </header>
            <article className="testimonials-cards"></article>
            <Button text="Get Started" />
        </section>
    );
}
