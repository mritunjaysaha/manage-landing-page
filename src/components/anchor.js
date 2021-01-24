import Link from "next/link";

export default function Anchor({ name, link }) {
    return (
        <Link href={link}>
            <a className="anchor-el">{name}</a>
        </Link>
    );
}
