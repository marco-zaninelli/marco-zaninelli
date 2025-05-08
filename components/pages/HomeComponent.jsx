import Head from "next/head";
import HomeLink from "@/components/general/HomeLink";
import HomeInspect from "@/components/general/HomeInspect";

export default function HomeComponent ({isEnglish}) {
    return (
        <>
            <Head>
                <title>Marco Zaninelli</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"w-full h-screen flex justify-center items-center flex-col"}>
                {isEnglish ? (
                    <>
                        <h2 className={"text-center max-w-screen-2xl"}>
                            Hi, I'm Marco, a <HomeInspect tooltip={'A frontend developer creates the visual and interactive parts of a website that users see and use. They write code to build layouts, buttons, menus, and animations, making sure everything looks good and works smoothly on all devices.'}>Frontend Developer</HomeInspect>.
                            Hi, I’m Marco, a creative developer. My <HomeLink href={"#"}>Portfolio</HomeLink> shows the craft, the <HomeLink href={"#"}>Gallery</HomeLink> shows my soul. Let’s <HomeLink href={'#'}>Collaborate</HomeLink>.</h2>
                    </>
                ) : (
                    <>
                        <h1>
                            Ciao, sono Marco, un Sviluppatore Creativo appassionato di creare esperienze coinvolgenti. Dai un’occhiata ai miei Lavori e alla mia
                            Fotografia, e sentiti libero di Contattarmi, mi piacerebbe aiutarti a dare vita al tuo progetto!
                        </h1>
                    </>
                )
                }
            </main>
        </>
    );
}
