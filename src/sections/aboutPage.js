import React from "react";
import Card from "../components/cards";

export default function AboutPage() {
    const data = [
        {
            id: "01",
            header: "Track company-wide progress",
            text:
                "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
        },
    ];
    return (
        <section className="about">
            <article className="about page-left">
                <h1>What’s different about Manage?</h1>
                <p>
                    Manage provides all the functionality your team needs,
                    without the complexity. Our software is tailor-made for
                    modern digital product teams.
                </p>
            </article>
            <article className="about page-right">
                <Card
                    id={data[0].id}
                    header={data[0].header}
                    text={data[0].text}
                />

                <Card
                    id={data[0].id}
                    header={data[0].header}
                    text={data[0].text}
                />
                <Card
                    id={data[0].id}
                    header={data[0].header}
                    text={data[0].text}
                />
            </article>
        </section>
    );
}
