import Head from "next/head";

export default function Home () {
    return (
        <>
            <Head>
                <title>Marco Zaninelli | Under construction</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"w-full h-screen flex justify-center items-center flex-col"}>
                <h1 className={"text-4xl font-mono"}>Website under construction</h1>
                <p className={"font-mono p-4"}>Thanks for your patience while I debug my life... and a few websites along the way.</p>
            </main>
        </>
    );
}
