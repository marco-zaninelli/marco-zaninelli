import NavBar from "./NavBar";
import Footer from "./Footer";
import Logo from "@/public/img/logo.svg"
import Image from "next/image";

export default function Layout({ children }) {
    return (
        <>
            {/* Background Color */}
            <div
                className={`fixed inset-0 z-[-2] bg-black flex items-center`}
            >
                <Image src={Logo} alt={'Marco Zaninelli Logo'} height={800} width={1800} className="opacity-15 h-auto w-1/2 m-auto" />
            </div>

            {/* Noise Texture */}
            <div
                className="fixed inset-0 z-[-1] bg-no-repeat bg-cover opacity-15"
                style={{ backgroundImage: "url('/img/noise.svg')" }}
            />
            <NavBar />
            {children}
            <Footer />
        </>
    );
}
