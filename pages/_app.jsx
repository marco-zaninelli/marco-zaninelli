import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Background from "@/components/layout/Background";
import Loader from "@/components/layout/Loader";

export default function App({Component, pageProps}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPage, setShowPage] = useState(true);

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

    return (
        <>
            <Background />
            <Loader loading={loading} onStartExit={handleLoaderExitComplete} />
            {showPage && (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </>
    );
}