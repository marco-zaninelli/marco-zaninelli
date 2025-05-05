import Head from "next/head";
import HomeComponent from "@/components/pages/HomeComponent";
import HomeContent from "@/content/HomeContent";

export default function HomeIT () {

    return (
        <>
            <Head>
                <title>Marco Zaninelli</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeComponent content={HomeContent.it} />
        </>
    );
}
