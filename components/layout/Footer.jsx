import Link from "next/link";

export default function Footer({fixed}){
    return (
        <footer className={`w-full text-center py-1 text-xs ${fixed ? "fixed bottom-0" : "relative block"}`}>
            <p className={'mx-auto text-sm hidden lg:block'}>©2025 Marco Zaninelli - All Right Reserved - Copyright & Cookies</p>
            <Link href={'#'} className={'lg:hidden'}><p className={'text-2xl'}>©</p></Link>
        </footer>
    )
}