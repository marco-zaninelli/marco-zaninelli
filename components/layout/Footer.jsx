import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/img/logo.svg";

export default function Footer(){
    return (
        <footer className="fixed bottom-0 w-full text-center py-1 text-xs">
            <p className={'mx-auto text-sm hidden lg:block'}>©2025 Marco Zaninelli - All Right Reserved - Copyright & Cookies</p>
            <Link href={'#'} className={'lg:hidden'}><p className={'text-2xl'}>©</p></Link>
        </footer>
    )
}