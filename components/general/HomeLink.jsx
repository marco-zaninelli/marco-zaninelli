import Link from "next/link";

const HomeLink = ({children, href}) => (
    <Link href={href}
          className={"uppercase inline-block leading-tight align-middle px-4 rounded-full hover:scale-105 backdrop-blur hover:shadow-out border-accent border-2 text-accent ease-in-out transition-all duration-300"}>
        {children}
    </Link>
);

export default HomeLink;
