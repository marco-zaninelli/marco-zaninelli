import Head from "next/head";

export default function HomeComponent ({content}) {
    return (
        <>
            <Head>
                <title>Marco Zaninelli</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"w-full h-screen flex justify-center items-center flex-col"}>
                <h1>{content.heading}</h1>
            </main>
        </>
    );
}
