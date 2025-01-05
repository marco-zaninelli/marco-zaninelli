import Head from "next/head";
import {GET_PROJECTS} from "@/utils/queries";
import {sanityClient} from "@/utils/sanity-client";
import Link from "next/link";

export default function Work ({data}) {
    return (
        <>
            <Head>
                <title>Projects Collection</title>
            </Head>
            <main>
                <div>

                </div>
                <div>
                    <div className={'inline-block'}>
                        <h1>PROJECTS</h1>
                        <p>{data.length}</p>
                    </div>
                    <div>
                        {data.map((project, index) => {
                            return (
                                <Link key={index} href={`/work/${project.slug.current}`} passHref>
                                    <div className="flex flex-row gap-x-4 justify-between">
                                        <h2>{index}</h2>
                                        <h2>{project.title}</h2>
                                        <h2>{project.category}</h2>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}


export async function getStaticProps () {
    try {
        const data = await sanityClient.fetch(GET_PROJECTS);
        return {
            props: {
                data
            },
            revalidate: 10
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                data: []
            }
        };
    }
}
