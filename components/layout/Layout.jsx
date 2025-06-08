import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children, fixed = true }) {
    return (
        <>
            <NavBar fixed={fixed} />
            <main
                className={fixed
                    ? "overflow-auto"
                    : "overflow-visible"}
            >
                {children}
            </main>
            <Footer fixed={fixed} />
        </>
    );
}
