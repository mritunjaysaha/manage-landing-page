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
        {
            id: "02",
            header: "Advanced built-in reports",
            text:
                "Set interval delivery estimates and track progress toward company goal. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
        },
        {
            id: "03",
            header: "Everything you need in one place",
            text:
                "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
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
                {data.map(({ id, header, text }) => (
                    <Card id={id} header={header} text={text} />
                ))}
            </article>
        </section>
    );
}
