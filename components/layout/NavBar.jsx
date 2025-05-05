import Link from "next/link";

import {useRouter} from "next/router";
import LocaleSwitcher from "@/components/util/LocaleSwitcher";

export default function NavBar() {
    const router = useRouter();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/work', label: 'Work' },
        { href: '/gallery', label: 'Gallery' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-50 max-w-screen-2xl mx-auto">
            <div className="flex space-x-6">
                {navLinks.map(({ href, label }) => {
                    const isActive = router.pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`text-sm font-medium ${
                                isActive
                                    ? 'text-blue-600 dark:text-blue-400 underline'
                                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>

            <LocaleSwitcher/>
        </nav>
    );
}