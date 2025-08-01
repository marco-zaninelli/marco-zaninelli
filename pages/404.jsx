// pages/404.jsx
import {useRouter} from "next/router";
import Head from "next/head";
import HomeLink from "@/components/general/HomeLink";

export default function Custom404 () {
    const {locale} = useRouter();
    const isEnglish = locale === "en";

    return (
        <>
            <Head>
                <title>{isEnglish ? "Page Not Found" : "Pagina Non Trovata"} | Marco Zaninelli</title>
            </Head>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl mb-4">404</h1>
                <p className="mb-8">
                    {isEnglish
                        ? "The page you're looking for doesn't exist."
                        : "La pagina che stai cercando non esiste."}
                </p>
                <HomeLink href="/">
                    <p className={'text-md p-1'}>
                        {isEnglish ? "Back to Home" : "Torna alla Home"}
                    </p>
                </HomeLink>
            </div>
        </>
    );
}