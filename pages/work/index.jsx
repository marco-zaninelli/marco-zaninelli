import Head from "next/head";
import {useState} from "react";
import ScrollToSelect from "@/components/general/ScrollToSelect";
import ProjectsTable from "@/components/general/ProjectsTable";
import ProjectsButton from "@/components/general/ProjectsButton";
import {useRouter} from "next/router";
import getProjectsData from "@/services/sanity/getProjectsData";

export default function Work ({visualData, textData}) {
    const {locale} = useRouter();
    const isEnglish = locale === "en";

    const [currentSelection, setcurrentSelection] = useState(null);
    // const [selectImage, setSelectImage] = useState(null);

    return (
        <>
            <Head>
                <title>Projects Collection</title>
            </Head>
            <div className={'w-screen h-screen lg:hidden flex flex-col'}>
                <div className={'h-96 bg-accent'}></div>
                <div className="md:mt-40 flex flex-row items-end gap-x-2">
                    <h1>PROJECTS</h1>
                    <h3 className="mb-3">{String(data.length).padStart(2, "0")}</h3>
                </div>
                <ScrollToSelect items={testData} onSelectIndex={setcurrentSelection} />
            </div>








            {/*<main className={'w-screen h-screen hidden lg:block'}>*/}
            {/*    <div className="flex flex-col md:flex-row h-screen">*/}

            {/*        /!* Fixed Left Column *!/*/}
            {/*        <div className="w-full md:w-1/2 h-96 overflow-hidden md:h-screen md:relative flex md:items-center justify-center">*/}
            {/*            <div*/}
            {/*                className={`absolute transition-opacity duration-500 ${*/}
            {/*                    selectImage ? "opacity-0" : "opacity-100"*/}
            {/*                }`}*/}
            {/*            >*/}
            {/*                <p className="text-gray-500">Select a Project</p>*/}
            {/*            </div>*/}
            {/*            <div*/}
            {/*                className={`absolute transition-opacity duration-500 ${*/}
            {/*                    selectImage ? "opacity-100" : "opacity-0"*/}
            {/*                }`}*/}
            {/*            >*/}
            {/*                {selectImage && (*/}
            {/*                    <img*/}
            {/*                        src={selectImage}*/}
            {/*                        alt="Hovered project"*/}
            {/*                        className="max-w-full max-h-full md:object-contain object-cover"*/}
            {/*                    />*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Scrollable Right Column *!/*/}
            {/*        <div className="w-full md:w-1/2 h-auto md:h-screen overflow-y-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14">*/}
            {/*            <div className="md:mt-40 flex flex-row items-end gap-x-2">*/}
            {/*                <h1>PROJECTS</h1>*/}
            {/*                <h3 className="mb-3">{String(data.length).padStart(2, "0")}</h3>*/}
            {/*            </div>*/}
            {/*            <ProjectsTable*/}
            {/*                data={data}*/}
            {/*                selected={setSelectImage}*/}
            {/*            />*/}

            {/*            /!*  ADD A BUTTON TO GO TO SELECTED PROJECT PAGE FOR TABLET AND MOBILE  *!/*/}
            {/*            <div className={'   block lg:hidden'}>*/}
            {/*                <ProjectsButton link={'/'}>*/}
            {/*                    To the project*/}
            {/*                </ProjectsButton>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</main>*/}
        </>
    );
}

export async function getStaticProps() {
    const { visualData, textData } = await getProjectsData();

    return {
        props: {
            visualData,
            textData
        },
        revalidate: 60
    };
}


// export async function getStaticProps () {
//     try {
//         const data = await sanityClient.fetch(GET_PROJECTS);
//         return {
//             props: {
//                 data
//             },
//             revalidate: 60
//         };
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return {
//             props: {
//                 data: []
//             }
//         };
//     }
// }


const testData = [
    {
        title: "Monica Mariz",
        category: "Website"
    },
    {
        title: "Vaia",
        category: "Product Design"
    },
    {
        title: "Axial Fans",
        category: "3D modelling"
    },
    {
        title: "Marco Zaninelli",
        category: "Website"
    },
    {
        title: "Vaia",
        category: "Product Design"
    },
    {
        title: "Axial Fans",
        category: "3D modelling"
    },
    {
        title: "Marco Zaninelli",
        category: "Website"
    },
    {
        title: "Vaia",
        category: "Product Design"
    },
    {
        title: "Axial Fans",
        category: "3D modelling"
    },
    {
        title: "Monica Mariz",
        category: "Website"
    },
    {
        title: "Vaia",
        category: "Product Design"
    },
    {
        title: "Axial Fans",
        category: "3D modelling"
    },
    {
        title: "Marco Zaninelli",
        category: "Website"
    },
    {
        title: "Vaia",
        category: "Product Design"
    },
    {
        title: "Axial Fans",
        category: "3D modelling"
    },
    {
        title: "Marco Zaninelli",
        category: "Website"
    },
    {
        title: "Vaia",
        category: "Product Design"
    },
    {
        title: "Axial Fans",
        category: "3D modelling"
    },
];