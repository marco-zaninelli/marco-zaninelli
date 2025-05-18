import Link from "next/link";
import {useRouter} from "next/router";
import LocaleSwitcher from "@/components/util/LocaleSwitcher";

export default function NavBar () {
    const {locale, pathname} = useRouter();

    // Labels per locale
    const labels = {
        en: {home: "Home", work: "Work", gallery: "Gallery"},
        it: {home: "Home", work: "Lavori", gallery: "Galleria"}
    };

    const titles = {
        en: {home: "Back to the homepage", work: "Browse my portfolio of client and personal projects", gallery: "View my photography gallery"},
        it: {
            home: "Torna alla pagina principale",
            work: "Esplora il mio portfolio di progetti personali e realizzati per clienti",
            gallery: "Esplora la mia galleria fotografica"
        }
    };

    const navLinks = [
        {href: "/", label: labels[locale].home, title: titles[locale].home},
        {href: "/work", label: labels[locale].work, title: titles[locale].work},
        {href: "/gallery", label: labels[locale].gallery, title: titles[locale].gallery}
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-50 max-w-screen-2xl mx-auto">
            <div className="flex space-x-6">
                {navLinks.map(({href, label}) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            locale={locale}
                            className={`text-sm font-medium ${
                                isActive
                                    ? "text-blue-600 dark:text-blue-400 underline"
                                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
            <LocaleSwitcher />
        </nav>
    );
}
