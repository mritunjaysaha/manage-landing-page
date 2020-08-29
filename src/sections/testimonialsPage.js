import React from "react";
import Button from "../components/buttons";

export default function TestimonialPage({ data }) {
    return (
        <section className="testimonials-page">
            <header className="header">
                <h3>What they've said</h3>
            </header>

            <div className="testimonials-cards">
                <div className="dp"></div>
                <h5>{data[0].name}</h5>
                <p>{data[0].text}</p>
            </div>

            <Button text="Get Started" />
        </section>
    );
}
