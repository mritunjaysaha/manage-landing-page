import React from "react";
import Navbar from "../src/components/nav";
import LandingPageSection from "../src/sections/landingPage";
function LandingPage() {
    return (
        <>
            <section className="section-1">
                <Navbar />
                <LandingPageSection />
            </section>
        </>
    );
}

export default LandingPage;
