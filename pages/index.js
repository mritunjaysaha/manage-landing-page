import React from "react";
import Navbar from "../src/components/nav";
import LandingPage from "../src/sections/landingPage";
import AboutPage from "../src/sections/aboutPage";
import TestimonialPage from "../src/sections/testimonialsPage";
import Banner from "../src/sections/banner";
import Footer from "../src/sections/footerSection";
const testimonialData = [
    {
        id: 1,
        name: "Anisha Li",
        text:
            "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
        id: 2,
        name: "Ali Bravo",
        text:
            "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
        id: 3,
        name: "Richard Watts",
        text:
            "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
        id: 4,
        name: "Shanai Gough",
        text:
            "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
];

function Index() {
    return (
        <>
            <section className="section-1">
                <Navbar />
                <LandingPage />
            </section>
            <section>
                <AboutPage />
                <TestimonialPage data={testimonialData} />
            </section>
            <Banner />
            <Footer />
        </>
    );
}

export default Index;
