import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import HomeLink from "@/components/general/HomeLink";


export default function Galleria () {
    return (
        <>
            <Head>
                <title>Photography Gallery</title>
            </Head>
            <Layout>
                <main className={"w-full h-screen flex justify-center items-center flex-col"}>
                    <h1 className={"text-4xl font-mono p-4"}>Gallery under construction</h1>
                    <p className={"font-mono p-4 text-center"}>Thanks for your patience while I debug my life… and a few websites along the way. Stay tuned for new work and photos coming soon!</p>
                    <HomeLink href={'portfolio'}>Explore my projects</HomeLink>
                </main>
            </Layout>
        </>

    );
}