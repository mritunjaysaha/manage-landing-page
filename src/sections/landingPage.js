import React from "react";
import Button from "../components/buttons";
import Image from "next/image";

export default function LandingPage() {
    return (
        <section className="landing page">
            <article className="landing page-left">
                <h1>Bring everyone together to build better products.</h1>
                <p>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>
                <Button text="Get Started" />
            </article>
            <article className="landing page-right">
                <Image src="/illustration-intro.svg" width={500} height={500} />
            </article>
        </section>
    );
}
