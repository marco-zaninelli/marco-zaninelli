import { GET_PROJECT_BY_SLUG } from "@/utils/queries";
import { sanityClient } from "@/services/sanity/sanity-client";
import Head from "next/head";
import Image from "next/image";

export default function Project({ project }) {
    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <>
            <Head>
                <title>{project.title}</title>

                {/*/!* Article Specific (for blog/gallery posts) *!/*/}
                {/*{type === 'article' && date && (*/}
                {/*    <>*/}
                {/*        <meta property="article:published_time" content={date} />*/}
                {/*        <meta property="og:article:published_time" content={date} />*/}
                {/*    </>*/}
                {/*)}*/}
            </Head>
            <main>
                <div>
                    <h1>{project.title}</h1>
                    <p>Category: {project.metadata?.category || "N/A"}</p>
                    <p>Year: {project.metadata?.year || "N/A"}</p>
                    <p>Client: {project.metadata?.client || "N/A"}</p>
                </div>
                <div>
                    <h2>Frameworks & Libraries</h2>
                    <ul>
                        {project.metadata?.frameworkLibraries?.map((lib, index) => (
                            <li key={index}>{lib}</li>
                        )) || <p>N/A</p>}
                    </ul>
                </div>
                <div>
                    <h2>Design Links</h2>
                    {project.metadata?.design ? (
                        <a href={project.metadata.design.url} target="_blank" rel="noopener noreferrer">
                            {project.metadata.design.designApp}
                        </a>
                    ) : (
                        <p>No design links available</p>
                    )}
                </div>
                <div>
                    <h2>Code Repository</h2>
                    {project.metadata?.code ? (
                        <a href={project.metadata.code.url} target="_blank" rel="noopener noreferrer">
                            {project.metadata.code.remote}
                        </a>
                    ) : (
                        <p>No code repository available</p>
                    )}
                </div>
                <div>
                    <h2>Images</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {project.images?.map((img, index) => (
                            <div key={index}>
                                <Image
                                    src={img.image}
                                    alt={img.alt || "Project image"}
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                />
                            </div>
                        )) || <p>No images available</p>}
                    </div>
                </div>
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const projects = await sanityClient.fetch(`
      *[_type == "project"] {
        "slug": slug.current
      }
    `);

    const paths = projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    try {
        const project = await sanityClient.fetch(GET_PROJECT_BY_SLUG, { slug: params.slug });

        return {
            props: {
                project,
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error("Error fetching project:", error);
        return {
            props: {
                project: null,
            },
        };
    }
}
