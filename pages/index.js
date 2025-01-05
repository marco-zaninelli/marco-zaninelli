import Head from "next/head";

export default function Home () {
    return (
        <>
            <Head>
                <title>Marco Zaninelli Introduction</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"w-full h-screen flex justify-center items-center flex-col"}>
                <h1>Home Page</h1>


                <h1>H1: this is a title</h1>
                <h2>H2: this is a title</h2>
                <h3>H3: this is a title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </main>
        </>
    );
}
