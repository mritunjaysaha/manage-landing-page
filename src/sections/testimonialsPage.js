import React, { useState } from "react";
import Button from "../components/buttons";

function Testiomonials({ data }) {
    const [current, setCurrent] = useState(data[0]);

    function handleSetClick(e) {
        const selected = e.target.dataset["testimonial"];
        console.log(selected);
        setCurrent(data[selected]);
    }

    return (
        <>
            <section className="testimonials-cards">
                <div className="dp"></div>
                <h5>{current.name}</h5>
                <p>{current.text}</p>
            </section>
            <section className="span-testimonials-container">
                {Object.keys(data).map((index) => {
                    {
                        return (
                            <span
                                className="span-testimonials-cards"
                                onClick={(e) => handleSetClick(e)}
                                data-testimonial={index}
                                key={index}
                            />
                        );
                    }
                })}
            </section>
        </>
    );
}

export default function TestimonialPage({ data }) {
    return (
        <section className="testimonials-page">
            <header className="header">
                <h3>What they've said</h3>
            </header>
            <Testiomonials data={data} />

            <Button text="Get Started" />
        </section>
    );
}
