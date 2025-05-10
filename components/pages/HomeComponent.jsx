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
            <div className={"w-full h-screen flex justify-center items-center flex-col px-10 sm:px-20"}>
                <h2 className={"w-full text-center max-w-screen-xl leading-relaxed"}>
                {isEnglish ? (
                    <>
                            Hi, I'm Marco, a <HomeInspect
                            tooltip={"I mix code and design to create interactive websites, apps, and digital art. I turn creative ideas into functional, engaging experiences using both tech and visual skills."}>Creative
                                                                                                                                                                                                                    Developer</HomeInspect> passionate
                            about building great experiences.<br />
                            The <HomeLink href={"#"}>Portfolio</HomeLink> shows my craft and the <HomeLink
                            href={"#"}>Gallery</HomeLink> shows my soul. Let’s start a <HomeLink href={"#"}>Collaboration</HomeLink>.
                    </>
                ) : (
                    <>
                            Ciao, sono Marco, uno <HomeInspect
                            tooltip={"Scrivo codice e realizzo design per creare siti web interattivi, app e arte digitale. Trasformo idee creative in esperienze funzionali e coinvolgenti, sfruttando competenze tecniche e visive."}>Sviluppatore Creativo</HomeInspect> e creo esperienze digitali innovative.<br />
                            Il <HomeLink href={"#"}>Portfolio</HomeLink> mostra le mie realizzazioni e la <HomeLink href={"#"}>Galleria</HomeLink> mostra la
                            mia creatività. Iniziamo una <HomeLink href={"#"}>Collaborazione</HomeLink> assieme.
                    </>
                )
                }
                </h2>
            </div>
        </>
    );
}
