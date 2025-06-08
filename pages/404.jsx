// pages/404.jsx
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
    const { locale } = useRouter();
    const isEnglish = locale === 'en';

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
                <Link
                    href="/"
                    className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                >
                    {isEnglish ? "Back to Home" : "Torna alla Home"}
                </Link>
            </div>
        </>
    );
}