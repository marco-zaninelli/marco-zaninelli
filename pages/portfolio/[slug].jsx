import {sanityClient} from "@/services/sanity/sanity-client";
import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import getProjectBySlug from "@/services/sanity/getProjectBySlug";
import {PortableText} from "@portabletext/react";
import Layout from "@/components/layout/Layout";
import ExternalTextLink from "@/components/general/ExternalTextLink";
import {portableTextComponents} from "@/components/util/portableTextComponents";

export default function Project ({project}) {
    const router = useRouter();
    const {locale} = router;
    const isEnglish = locale === "en";

    // Metadata
    const siteName    = "Marco Zaninelli";
    const title       = `${project.title} | ${siteName}`;
    const description = project.description?.[locale]
        ?? (project.excerpt?.[locale] || "");
    const baseUrl     = process.env.NEXT_PUBLIC_SITE_URL
        || "https://www.marco.zaninelli.me";
    const fullUrl     = `${baseUrl}${locale === "en" ? "/en" : ""}${project.slug.current}`;
    const thumbUrl    = project.thumbnail.url;

    return (
        <>
            <Head>
                {/* Titolo e descrizione */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={fullUrl} />

                {/* Open Graph */}
                <meta property="og:site_name"    content={siteName} />
                <meta property="og:locale"       content={locale} />
                <meta property="og:type"         content="article" />
                <meta property="og:url"          content={fullUrl} />
                <meta property="og:title"        content={title} />
                <meta property="og:description"  content={description} />
                <meta property="og:image"        content={thumbUrl} />
                <meta property="og:image:width"  content="1200" />
                <meta property="og:image:height" content="800" />

                {/* Twitter Card */}
                <meta name="twitter:card"        content="summary_large_image" />
                <meta name="twitter:title"       content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image"       content={thumbUrl} />

                {/* Hreflang */}
                <link
                    rel="alternate"
                    hrefLang="it"
                    href={`${baseUrl}${project.slug.current}`}
                />
                <link
                    rel="alternate"
                    hrefLang="en"
                    href={`${baseUrl}/en${project.slug.current}`}
                />
                <link
                    rel="alternate"
                    hrefLang="x-default"
                    href={fullUrl}
                />

                {/* Preconnect/Prefetch */}
                <link rel="preconnect" href="https://cdn.sanity.io" />
                <link rel="dns-prefetch" href="https://cdn.sanity.io" />
            </Head>
            <Layout fixed={false}>
                <main className="container mx-auto px-4 max-w-screen-2xl">

                    {/* Thumbnail */}
                    <div className="mb-8 relative">
                        <Image
                            src={project.thumbnail.url}
                            alt={project.thumbnail.alt[locale]}
                            title={project.thumbnail.title[locale]}
                            width={1200}
                            height={800}
                            className="object-cover h-auto w-auto mx-auto"
                            priority
                        />
                    </div>

                    <h1 className="text-6xl mb-8 pb-4 uppercase border-b border-white">{project.title}</h1>

                    <div className={"flex flex-col-reverse md:flex-row w-full"}>
                        <div className={"w-full md:w-1/3 border-t border-white md:border-0 pt-2 md:pt-0 mt-4 md:mt-0"}>
                            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">

                                {/* Project Type */}
                                <dt className="font-semibold text-gray-400">{isEnglish ? "Project type" : "Tipo progetto"}:</dt>
                                <dd className="text-white min-w-0 w-fit">
                                    {project.category || "N/A"}
                                </dd>

                                {/* Year */}
                                <dt className="font-semibold text-gray-400">{isEnglish ? "Year" : "Anno"}:</dt>
                                <dd className="text-white min-w-0 w-fit">
                                    {project.year || "N/A"}
                                </dd>

                                {/* Client */}
                                <dt className="font-semibold text-gray-400">{isEnglish ? "Client" : "Cliente"}:</dt>
                                <dd className="text-white min-w-0 w-fit">
                                    {project.client || "N/A"}
                                </dd>

                                {/* Libraries */}
                                {project.frameworkLibraries && project.frameworkLibraries.length > 0 && (
                                    <>
                                        <dt className="font-semibold text-gray-400">{isEnglish ? "Libraries" : "Librerie"}:</dt>
                                        <dd className="text-white min-w-0 w-fit">
                                            <ul className="list-none">
                                                {project.frameworkLibraries.map((lib, idx) => (
                                                    <li key={idx}>{lib}</li>
                                                ))}
                                            </ul>
                                        </dd>
                                    </>
                                )}

                                {/* Design */}
                                {project.design && (
                                    <>
                                        <dt className="font-semibold text-gray-400">Design:</dt>
                                        <dd className="text-white">
                                            <ExternalTextLink href={project.design.url}>{project.design.app}</ExternalTextLink>
                                        </dd>
                                    </>
                                )}

                                {/* Code */}
                                {project.code && (
                                    <>
                                        <dt className="font-semibold text-gray-400">{isEnglish ? "Code" : "Codice"}:</dt>
                                        <dd className="text-white">
                                            <ExternalTextLink href={project.code.url}>{project.code.remote}</ExternalTextLink>
                                        </dd>
                                    </>
                                )}
                            </dl>
                        </div>

                        <div className="w-full md:w-2/3">
                            {/* Content */}
                            {project.content && project.content[locale] && (
                                <div className="prose prose-invert max-w-none">
                                    <PortableText
                                        value={project.content[locale]}
                                        components={portableTextComponents}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export async function getStaticProps ({params, locale}) {
    const project = await getProjectBySlug(params.slug, locale);
    if (!project) {
        return {notFound: true};
    }
    return {
        props: {project, locale},
        revalidate: 60
    };
}

export async function getStaticPaths () {
    const projects = await sanityClient.fetch(`
        *[_type == "project"] {
            "slug": slug.current
        }
    `);

    const paths = projects.map((project) => ({
        params: {slug: project.slug}
    }));

    return {
        paths,
        fallback: "blocking"
    };
}