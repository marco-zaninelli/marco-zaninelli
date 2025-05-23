import Head from "next/head";
import {useMemo, useState} from "react";
import ScrollToSelect from "@/components/general/ScrollToSelect";
import ProjectsTable from "@/components/general/ProjectsTable";
import {useRouter} from "next/router";
import getProjectsData from "@/services/sanity/getProjectsData";
import Image from "next/image";
import {urlFor} from "@/services/sanity/image-url";
import {AnimatePresence, motion} from "framer-motion";

import defaultThumbnail from "@/public/img/logo.svg";
import Link from "next/link";
import HomeLink from "@/components/general/HomeLink";

// Animations
const bgVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 0.3}},
    exit: {opacity: 0, transition: {duration: 0.3}}
};

const cardVariants = {
    initial: {opacity: 0, y: 50},
    animate: {opacity: 1, y: 0, transition: {delay: 0.3, duration: 0.5}},
    exit: {opacity: 0, y: 50, transition: {duration: 0.3}}
};

export default function Work ({mainData, gridData}) {
    const {locale} = useRouter();
    const isEnglish = locale === "en";

    const [currentSelection, setcurrentSelection] = useState(0);

    const selectedImg = useMemo(
        () => urlFor(mainData[currentSelection].thumbnail).url(),
        [mainData, currentSelection]
    );

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>{isEnglish ? "Work I am proud of" : "Progetti & Realizzazioni"} | Marco Zaninelli</title>
                {/*<meta name="description" content="TODO: add a description" />*/}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

                {/* Canonical URL */}
                {/*<link rel="canonical" href={fullUrl} />*/}

                {/* Open Graph */}
                {/*<meta property="og:locale" content={locale} />*/}
                {/*<meta property="og:site_name" content="Your Name" />*/}
                {/*<meta property="og:type" content={type} />*/}
                {/*<meta property="og:title" content={title || defaultTitle} />*/}
                {/*<meta property="og:description" content={description || defaultDescription} />*/}
                {/*<meta property="og:image" content={fullImage} />*/}
                {/*<meta property="og:image:width" content="1200" />*/}
                {/*<meta property="og:image:height" content="630" />*/}
                {/*<meta property="og:url" content={fullUrl} />*/}

                {/* Twitter */}
                {/*<meta name="twitter:card" content="summary_large_image" />*/}
                {/*<meta name="twitter:site" content="@yourusername" />*/}
                {/*<meta name="twitter:title" content={title || defaultTitle} />*/}
                {/*<meta name="twitter:description" content={description || defaultDescription} />*/}
                {/*<meta name="twitter:image" content={fullImage} />*/}

                {/* Alternate Language versions */}
                {/*<link rel="alternate" href={`${siteUrl}/en${router.pathname}`} hrefLang="en" />*/}
                {/*<link rel="alternate" href={`${siteUrl}/it${router.pathname}`} hrefLang="it" />*/}
                {/*<link rel="alternate" href={`${siteUrl}${router.pathname}`} hrefLang="x-default" />*/}

                {/* Preconnect to Important Third-party Domains */}
                <link rel="preconnect" href="https://cdn.sanity.io" />
                <link rel="dns-prefetch" href="https://cdn.sanity.io" />

            </Head>
            <div className="w-full h-screen lg:hidden flex flex-col sm:flex-row">
                <div
                    className="relative flex-1 h-1/2 sm:w-1/2 sm:h-screen"
                >
                    {/* Blurred BG */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedImg}
                            variants={bgVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute inset-0 z-0 overflow-hidden blur-sm"
                        >
                            <Image
                                src={selectedImg}
                                alt="Background"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover w-full h-full"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Animated card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSelection}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute inset-0 z-10 flex justify-center items-center px-4"
                        >
                            <Link
                                href={mainData[currentSelection].slug}
                                className="group w-full max-w-sm flex flex-col items-start rounded-md bg-background p-2"
                            >
                                <div className="relative w-full aspect-[3/2] rounded-sm overflow-hidden shadow-lg">
                                    <Image
                                        src={selectedImg}
                                        alt={mainData[currentSelection].thumbnail.alt[locale]}
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                    />
                                </div>
                                <p className="my-1 mx-2">
                                    {isEnglish ? "About the project →" : "Scopri il progetto →"}
                                </p>
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Table header */}
                <div className="sm:hidden mt-3 mb-1 max-w-2xl">
                    <TableHeader count={mainData.length} isEnglish={isEnglish} />
                </div>

                {/* Table */}
                <div className="px-4 mx-auto w-full h-1/2 sm:w-1/2 sm:h-screen max-w-2xl flex flex-col">
                    <div className="hidden sm:flex h-1/3">
                        <TableHeader count={mainData.length} isEnglish={isEnglish} />
                    </div>
                    <div className="flex-1 sm:h-2/3 overflow-y-auto">
                        <ScrollToSelect items={gridData} onCurrentSelection={setcurrentSelection} />
                    </div>
                </div>
            </div>


            <main className={'w-screen h-screen hidden lg:block'}>
                <div className="flex flex-col md:flex-row h-screen">

                    {/* Fixed Left Column */}
                    <div className="w-full md:w-1/2 h-96 overflow-hidden md:h-screen md:relative flex md:items-center justify-center">
                        <div
                            className={`absolute transition-opacity duration-500 ${
                                selectedImg ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            <p className="text-gray-500">Select a Project</p>
                        </div>
                        <div
                            className={`absolute transition-opacity duration-500 ${
                                selectedImg ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {selectedImg && (
                                <img
                                    src={selectedImg}
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
                            <h3 className="mb-3">{String(mainData.length).padStart(2, "0")}</h3>
                        </div>
                        <ProjectsTable
                            data={gridData}
                            selected={selectedImg}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

function TableHeader ({count, isEnglish}) {
    return (
        <div className="flex items-end gap-x-2 px-4">
            <h1 className="text-white">{isEnglish ? "PROJECTS" : "PROGETTI"}</h1>
            <h3 className="text-white mb-1.5">
                {String(count).padStart(2, "0")}
            </h3>
        </div>
    );
}

export async function getStaticProps () {
    const {mainData, gridData} = await getProjectsData();

    return {
        props: {
            mainData,
            gridData
        },
        revalidate: 60
    };
}