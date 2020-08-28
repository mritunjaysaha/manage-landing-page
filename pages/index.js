import React from "react";
import Navbar from "../src/components/nav";
import LandingPage from "../src/sections/landingPage";
import AboutPage from "../src/sections/aboutPage";
import TestimonialPage from "../src/sections/testimonialsPage";

function Index() {
    return (
        <>
            <section className="section-1">
                <Navbar />
                <LandingPage />
            </section>
            <section>
                <AboutPage />
                <TestimonialPage />
            </section>
        </>
    );
}

export default Index;
