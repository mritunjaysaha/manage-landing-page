import { useState } from "react";
import Button from "../components/buttons";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

function Testiomonials({ data }) {
    // const [current, setCurrent] = useState(data[0]);

    // function handleSetClick(e) {
    //     const selected = e.target.dataset["testimonial"];
    //     console.log(selected);
    //     setCurrent(data[selected]);
    // }

    // return (
    //     <>
    //         <section className="testimonials-cards">
    //             <div className="dp"></div>
    //             <h5>{current.name}</h5>
    //             <p>{current.text}</p>
    //         </section>
    //         <section className="span-testimonials-container">
    //             {Object.keys(data).map((index) => {
    //                 {
    //                     return (
    //                         <span
    //                             className="span-testimonials-cards"
    //                             onClick={(e) => handleSetClick(e)}
    //                             data-testimonial={index}
    //                             key={index}
    //                         />
    //                     );
    //                 }
    //             })}
    //         </section>
    //     </>
    // );
    return (
        <Image src="/avatar-richard.png" alt="temp" width={400} height={400} />
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
