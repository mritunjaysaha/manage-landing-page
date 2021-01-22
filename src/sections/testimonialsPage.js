import Button from "../components/buttons";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const testimonialData = [
    {
        img: "avatar-anisha.png",
        name: "Anisha Li",
        text:
            "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
        img: "avatar-ali.png",
        name: "Ali Bravo",
        text:
            "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
        img: "avatar-richard.png",
        name: "Richard Watts",
        text:
            "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
        img: "avatar-shanai.png",
        name: "Shanai Gough",
        text:
            "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
];

function Testimonials() {
    const items = [];
    for (let i = 0; i < testimonialData.length; i++) {
        items.push(
            <div className="testimonials-cards-div" data-value={i}>
                <Image
                    src={`/${testimonialData[i].img}`}
                    alt={testimonialData[i].name}
                    width={100}
                    height={100}
                />
                <h3>{testimonialData[i].name}</h3>
                <p>{testimonialData[i].text}</p>
            </div>
        );
    }

    const responsive = {
        0: { items: 2 },
    };

    const Carousel = () => (
        <AliceCarousel
            className="alice-carousel"
            mouseTracking
            infinite="true"
            items={items}
            responsive={responsive}
        />
    );
    return <Carousel></Carousel>;
}

export default function TestimonialPage() {
    return (
        <section className="testimonials-page">
            <header className="header">
                <h3>What they've said</h3>
            </header>
            <Testimonials />
            <Button text="Get Started" />
        </section>
    );
}
