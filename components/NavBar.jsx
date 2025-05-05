import { useTheme } from '@/context/ThemeContext';
import Image from "next/image";
import Link from "next/link";

import LogoLight from '@/public/logo_w_256.png';
import LogoDark from '@/public/logo_b_256.png';

export default function NavBar() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-50 max-w-screen-2xl mx-auto">
            {/* Logo */}
            <div className="flex items-center">
                <Image
                    alt="Website Logo"
                    src={isDarkMode ? LogoLight : LogoDark}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
                <Link href="/" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
                    Home
                </Link>
                <Link href="/work" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
                    Work
                </Link>
                <Link href="/gallery" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
                    Gallery
                </Link>
            </div>

            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
        </nav>
    );
}
