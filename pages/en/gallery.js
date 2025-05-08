import Head from "next/head";
import GalleryComponent from "@/components/pages/GalleryComponent";

export default function GalleryEN () {

    return (
        <>
            <Head>
                <title>Marco Zaninelli</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GalleryComponent />
        </>
    );
}
