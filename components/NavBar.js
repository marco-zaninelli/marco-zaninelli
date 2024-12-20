import { useTheme } from '@/context/ThemeContext';
import Image from "next/image";

import LogoLight from '@/public/logo_w_256.png'
import LogoDark from '@/public/logo_b_256.png'

export default function NavBar(){
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <nav className={'fixed flex flex-row max-w-screen-2xl w-full mx-auto'}>
            <Image  alt={'Website Logo'} src={isDarkMode ? LogoLight : LogoDark} className={'w-10 h-10'} />

            <button onClick={toggleTheme}>
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
        </nav>
    )
}