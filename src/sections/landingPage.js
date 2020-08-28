import React from "react";
import Button from "../components/buttons";

export default function LandingPageSection() {
    return (
        <section className="landing page">
            <article className="landing page-left">
                <h1>Bring everyone toghether to build better products.</h1>
                <p>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>
                <Button text="Get Started" />
            </article>
            <article className="landing page-right"></article>
        </section>
    );
}
