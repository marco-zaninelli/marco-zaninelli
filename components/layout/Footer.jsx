import Link from "next/link";

export default function Footer({ fixed = false }) {
    const year = new Date().getFullYear();
    const positionClass = fixed ? "fixed bottom-0" : "";

    return (
        <footer className={`w-full text-center py-1 text-xs ${positionClass}`.trim()}>
            <p className="mx-auto text-xs md:text-sm">
                ©{year} Marco Zaninelli - All Rights Reserved
                <span className="hidden md:inline"> - </span>
                <br className="md:hidden" />
                <Link
                    href="/privacy"
                    className="ml-1 underline hover:text-accent transition-all duration-200"
                >
                    Copyright &amp; Cookies
                </Link>
            </p>
        </footer>
    );
}
