import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import "@/styles/globals.css";
import Background from "@/components/layout/Background";
import Loader from "@/components/layout/Loader";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import CookieBanner from "@/components/general/CookieBanner";
config.autoAddCss = false

export default function App ({Component, pageProps}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPage, setShowPage] = useState(true);

    // Pages loading animation
    useEffect(() => {
        const handleStart = () => {
            setShowPage(false);
            setLoading(true);
        };

        const handleComplete = () => {
            setLoading(false);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    const handleLoaderExitComplete = () => {
        setShowPage(true);
    };

    // Google Analytics
    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        const isPrivacyPage = router.pathname === "/privacy";

        if (consent === "accepted" && !isPrivacyPage) {
            const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

            const script1 = document.createElement("script");
            script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            script1.async = true;
            document.head.appendChild(script1);

            const script2 = document.createElement("script");
            script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `;
            document.head.appendChild(script2);
        }
    }, [router.pathname]);

    return (
        <>
            <Background />
            <Loader loading={loading} onStartExit={handleLoaderExitComplete} />
            {showPage && (
                <Component {...pageProps} />
            )}
            {router.pathname !== "/privacy" && <CookieBanner />}
        </>
    );
}