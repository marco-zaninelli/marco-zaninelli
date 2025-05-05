import Head from "next/head";
import {GET_PROJECTS} from "@/utils/queries";
import {sanityClient} from "@/utils/sanity-client";
import ProjectsTable from "@/components/general/ProjectsTable";
import {useState} from "react";
import ProjectsButton from "@/components/general/ProjectsButton";

export default function Work ({data}) {
    const [selectImage, setSelectImage] = useState(null);

    const test = [
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        },
        {
            index: "01",
            title: "Test",
            category: "Test"
        }
    ];

    return (
        <>
            <Head>
                <title>Projects Collection</title>
            </Head>
            <main>
                <div className="flex flex-col md:flex-row h-screen">

                    {/* Fixed Left Column */}
                    <div className="w-full md:w-1/2 h-96 overflow-hidden md:h-screen md:relative flex md:items-center justify-center">
                        <div
                            className={`absolute transition-opacity duration-500 ${
                                selectImage ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            <p className="text-gray-500">Select a Project</p>
                        </div>
                        <div
                            className={`absolute transition-opacity duration-500 ${
                                selectImage ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {selectImage && (
                                <img
                                    src={selectImage}
                                    alt="Hovered project"
                                    className="max-w-full max-h-full md:object-contain object-cover"
                                />
                            )}
                        </div>
                    </div>

                    {/* Scrollable Right Column */}
                    <div className="w-full md:w-1/2 h-auto md:h-screen overflow-y-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14">
                        <div className="md:mt-40 flex flex-row items-end gap-x-2">
                            <h1>PROJECTS</h1>
                            <h3 className="mb-3">{String(data.length).padStart(2, "0")}</h3>
                        </div>
                        <ProjectsTable
                            data={data}
                            selected={setSelectImage}
                        />

                        {/*  ADD A BUTTON TO GO TO SELECTED PROJECT PAGE FOR TABLET AND MOBILE  */}
                        <div className={'   block lg:hidden'}>
                            <ProjectsButton link={'/'}>
                                To the project
                            </ProjectsButton>
                        </div>

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
