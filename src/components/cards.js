import React from "react";

export default function Card({ id, header, text }) {
    console.log(id);

    return (
        <article className="cards">
            <div className="tag">
                <p>{id}</p>
            </div>
            <div className="contents">
                <h4 className="contents-header">{header}</h4>
                <p className="contents-text">{text}</p>
            </div>
        </article>
    );
}
