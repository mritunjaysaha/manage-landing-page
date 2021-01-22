/**
 *
 * @param {String} text prop will place the text for the button
 */
export default function Button({ changeClass, text }) {
    return <button className={`button ${changeClass}`}>{text}</button>;
}
