import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    // Check consent on mount
    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) setVisible(true);
    }, []);

    // Disable scrolling (except on privacy page)
    useEffect(() => {
        if (visible && router.pathname !== "/privacy") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [visible, router.pathname]);

    // Accept cookies
    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
        window.location.reload();
    };

    // Reject cookies
    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-auto"></div>

            {/* Banner */}
            <div className="absolute bg-white text-gray-900 p-4 flex flex-col items-start shadow-lg gap-y-2">
                <h2>Take the cookie 🍪</h2>
                <p className="mb-2 md:mb-0 text-left">
                    We use a couple of essential cookies to keep things running smoothly — and some optional ones (like analytics) to see what’s popular on the site.
                    <br/>You can say yes or no (totally your choice), and change your mind anytime from the <Link href="/privacy" className="underline hover:text-accent transition-all duration-200">privacy & cookie page</Link>.
                </p>
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={handleAccept}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                        Accept
                    </button>
                    <button
                        onClick={handleReject}
                        className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
                    >
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
}
