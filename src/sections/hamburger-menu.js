import Anchor from "../components/anchor";

export default function Hamburger() {
    return (
        <section className="hamburger-section">
            <div className="hamburger-icon-div">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p id="close-menu" className="hamburger-close-p">
                &times;
            </p>
            <div className="hamburger-menu-div">
                <ul className="hamburger-menu-ul">
                    <li>
                        <Anchor name="pricing" link="#" />
                    </li>
                    <li>
                        <Anchor name="product" link="#" />
                    </li>
                    <li>
                        <Anchor name="about us" link="#" />
                    </li>
                    <li>
                        <Anchor name="careers" link="#" />
                    </li>
                    <li>
                        <Anchor name="community" link="#" />
                    </li>
                </ul>
            </div>
        </section>
    );
}
