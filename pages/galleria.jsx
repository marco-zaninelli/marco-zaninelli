import Head from "next/head";
import Layout from "@/components/layout/Layout";
import HomeLink from "@/components/general/HomeLink";
import {useRouter} from "next/router";


export default function Galleria () {
    const {locale} = useRouter();
    const isEnglish = locale === "en";

    return (
        <>
            <Head>
                <title>Photography Gallery</title>
            </Head>
            <Layout>
                <main className={"w-full h-screen flex justify-center items-center flex-col"}>
                    <h1 className={"text-4xl font-mono p-4"}>{isEnglish ? "Gallery under construction" : "Galleria in costruzione"}</h1>
                    <p className={"font-mono p-4 text-center"}>{isEnglish ? "Thanks for your patience while I debug my life… and a few websites along the way. Stay tuned for work and photos coming soon!": "Grazie per la pazienza mentre faccio il debug della mia vita… e di qualche sito web lungo il percorso.\n" +
                        "Restate sintonizzati per nuovi lavori e foto in arrivo!"}</p>
                    <HomeLink href={"portfolio"}>
                        <p className={"text-md p-1"}>
                            Explore my projects</p>
                    </HomeLink>
                </main>
            </Layout>
        </>

    );
}