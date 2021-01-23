import React from "react";

export default function Card({ id, header, text }) {
    return (
        <article className="cards">
            <div className="tag hide-on-mobile">
                <p>{id}</p>
            </div>
            <div className="contents">
                <h4 className="contents-header hide-on-mobile">{header}</h4>
                <div className="id-header-div hide-on-desktop">
                    <div className="tag">
                        <p>{id}</p>
                    </div>
                    <h4>{header}</h4>
                </div>
                <p className="contents-text">{text}</p>
            </div>
        </article>
    );
}
