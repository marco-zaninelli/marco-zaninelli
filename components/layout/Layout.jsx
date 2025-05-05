import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            {/* Background Color */}
            <div
                className={`fixed inset-0 z-[-2] bg-black`}
            />
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
