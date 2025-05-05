import Link from "next/link";

export default function ProjectsButton({children, link}) {
    return (
        <Link href={link}>
            {children}
        </Link>
    )
}