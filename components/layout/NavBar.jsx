import Link from "next/link";
import {useRouter} from "next/router";
import LocaleSwitcher from "@/components/util/LocaleSwitcher";
import {motion} from "framer-motion";

export default function NavBar ({fixed}) {
    const {locale, pathname} = useRouter();

    const labels = {
        en: {home: "Home", work: "Work", gallery: "Gallery"},
        it: {home: "Home", work: "Portfolio", gallery: "Galleria"}
    };

    const titles = {
        en: {
            home: "Back to the homepage",
            work: "Browse my portfolio of client and personal projects",
            gallery: "View my photography gallery"
        },
        it: {
            home: "Torna alla pagina principale",
            work: "Esplora il mio portfolio di progetti personali e realizzati per clienti",
            gallery: "Esplora la mia galleria fotografica"
        }
    };

    const navLinks = [
        {href: "/", label: labels[locale].home, title: titles[locale].home},
        {href: "/portfolio", label: labels[locale].work, title: titles[locale].work},
        {href: "/galleria", label: labels[locale].gallery, title: titles[locale].gallery}
    ];

    return (
        <motion.nav
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{type: "spring", stiffness: 80, damping: 12}}
            className={`flex items-center justify-between px-6 py-4 z-20 max-w-screen-2xl mx-auto ${fixed ? "fixed top-0 left-0 right-0" : "relative"}`}
        >
            <div className="flex space-x-6">
                {navLinks.map(({href, label, title}) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            locale={locale}
                            title={title}
                            className={`inline-block text-md font-medium transition-all duration-200 ${
                                isActive
                                    ? "text-accent scale-105"
                                    : "text-gray-400 hover:text-gray-200 hover:scale-105"
                            }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
            <LocaleSwitcher className={"text-gray-400 hover:text-gray-200 hover:scale-105 transition-all duration-200"} />
        </motion.nav>
    );
}
