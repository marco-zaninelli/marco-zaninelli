import Head from "next/head";
import {useRouter} from "next/router";
import HomeInspect from "@/components/general/HomeInspect";
import HomeLink from "@/components/general/HomeLink";
import Layout from "@/components/layout/Layout";

export default function Home () {
    const {locale} = useRouter();
    const isEnglish = locale === "en";

    // Metadata
    const title       = "Marco Zaninelli";
    const description = isEnglish
        ? "Personal portfolio of a creative developer specializing in web development and photography for businesses. Explore innovative projects and tailored solutions."
        : "Portfolio personale di un creative developer specializzato in web development e fotografia per aziende. Scopri progetti innovativi e soluzioni su misura.";

    // URL dinamico
    const baseUrl     = process.env.NEXT_PUBLIC_SITE_URL || "https://www.marco.zaninelli.me";
    const path        = isEnglish ? "/en" : "/";
    const url         = `${baseUrl}${path}`;
    const imagePath   = "/img/Thumbnail.png";
    const image       = `${baseUrl}${imagePath}`;

    return (
        <>
            <Head>
                {/* Titolo e descrizione */}
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* Canonical URL */}
                <link rel="canonical" href={url} />

                {/* Open Graph */}
                <meta property="og:type"        content="website" />
                <meta property="og:title"       content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url"         content={url} />
                <meta property="og:image"       content={image} />

                {/* Twitter Card */}
                <meta name="twitter:card"        content="summary_large_image" />
                <meta name="twitter:title"       content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image"       content={image} />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="it" href={`${baseUrl}/`} />
                <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
            </Head>
            <Layout>
                <main className={"w-full h-screen flex justify-center items-center flex-col px-10 sm:px-20"}>
                    <h1 className={"w-full text-center max-w-screen-xl !leading-relaxed text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.75rem]"}>
                        {isEnglish ? (
                            <>
                                Hi, I'm Marco, a <HomeInspect
                                tooltip={"I mix code and design to create interactive websites, apps, and digital art. I turn creative ideas into functional, engaging experiences using both tech and visual skills."}>Creative
                                                                                                                                                                                                                        Developer</HomeInspect> passionate
                                about building great experiences.<br />
                                The <HomeLink href={"/portfolio"}>Portfolio</HomeLink> shows my craft and the <HomeLink
                                href={"/galleria"}>Gallery</HomeLink> shows my soul. Let’s start a <HomeLink href={"#"}>Collaboration</HomeLink>.
                            </>
                        ) : (
                            <>
                                Ciao, sono Marco, uno <HomeInspect
                                tooltip={"Scrivo codice e realizzo design per creare siti web interattivi, app e arte digitale. Trasformo idee creative in esperienze funzionali e coinvolgenti, sfruttando competenze tecniche e visive."}>Sviluppatore
                                                                                                                                                                                                                                            Creativo</HomeInspect> e
                                creo esperienze digitali innovative.<br />
                                Il <HomeLink href={"/portfolio"}>Portfolio</HomeLink> mostra le mie realizzazioni e la <HomeLink
                                href={"/galleria"}>Galleria</HomeLink> mostra la
                                mia creatività. Iniziamo una <HomeLink href={"#"}>Collaborazione</HomeLink> assieme.
                            </>
                        )
                        }
                    </h1>
                </main>
            </Layout>
        </>
    );
}
