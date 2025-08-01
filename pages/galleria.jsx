import {sanityClient} from "@/services/sanity/sanity-client";
import Image from "next/image";
import {urlFor} from "@/services/sanity/image-url";
import Head from "next/head";
import Layout from "@/components/layout/Layout";


export default function Galleria ({galleries}) {
    return (
        <>
            <Head>
                <title>Photography Gallery</title>
            </Head>
            <Layout>
                <main className="w-screen h-screen">
                    <div
                        className="w-full h-full overflow-x-auto flex items-center"
                    >
                        <div className="flex snap-x snap-mandatory">
                            {galleries.reverse().map((year, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-[500px] h-[500px] snap-center flex flex-col gap-y-2 items-center justify-center text-xl"
                                    style={{
                                        marginRight: index === galleries.length - 1 ? "0px" : "250px"
                                    }}
                                >
                                    <Image
                                        src={urlFor(year.thumbnail).url()}
                                        alt={year.thumbnailAlt || "Year Thumbnail"}
                                        width={500}
                                        height={500}
                                    />
                                    <h2>{year.year}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </Layout>
        </>

    );
}

export async function getStaticProps () {
    try {
        const galleries = await sanityClient.fetch(``);
        console.log(galleries);
        return {
            props: {
                galleries
            },
            revalidate: 10
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                allData: []
            }
        };
    }
}