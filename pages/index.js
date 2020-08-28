import React from "react";
import Navbar from "../src/components/nav";
import LandingPage from "../src/sections/landingPage";
import AboutPage from "../src/sections/aboutPage";

function Index() {
    return (
        <>
            <section className="section-1">
                <Navbar />
                <LandingPage />
            </section>
            <section>
                <AboutPage />
            </section>
        </>
    );
}

export default Index;
