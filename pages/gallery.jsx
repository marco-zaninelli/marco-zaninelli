import {sanityClient} from "@/utils/sanity-client";
import {GET_GALLERY} from "@/utils/queries";
import Image from "next/image";
import {urlFor} from "@/utils/image-url";
import Head from "next/head";


export default function Gallery ({galleries}) {
    return (
        <>
            <Head>
                <title>Photography Gallery</title>
            </Head>
            <main className="w-screen h-screen">
                <div
                    className="w-full h-full overflow-x-auto flex items-center"
                    style={{
                        paddingLeft: "calc(50vw - 250px)", // Center the first item
                        paddingRight: "calc(50vw - 250px)", // Center the last item
                        scrollbarWidth: "none", // Hide scrollbar for Firefox
                        msOverflowStyle: "none" // Hide scrollbar for IE
                    }}
                >
                    {/* Hide scrollbar for Webkit browsers */}
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

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
        </>

    );
}

export async function getStaticProps () {
    try {
        const galleries = await sanityClient.fetch(GET_GALLERY);
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

// import { useState, useEffect, useRef } from "react";
// import Head from "next/head";
// import { sanityClient } from "@/utils/sanity-client";
// import { GET_GALLERY } from "@/utils/queries";
//
// export default function Gallery({ galleries }) {
//     const [selectedYear, setSelectedYear] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [visible, setVisible] = useState(true); // Track if image is visible for details
//
//     const verticalScrollRef = useRef(); // Ref for vertical scrollable div
//
//     // Handle year selection
//     const handleYearClick = (year) => {
//         setSelectedYear(year);
//         setSelectedImage(null);
//     };
//
//     // Infinite scroll loop
//     const handleScroll = () => {
//         const verticalScroll = verticalScrollRef.current;
//         if (!verticalScroll) return;
//
//         if (verticalScroll.scrollTop + verticalScroll.clientHeight >= verticalScroll.scrollHeight) {
//             verticalScroll.scrollTop = 0; // Scroll back to the top
//         }
//     };
//
//     // Check if image is in viewport
//     const handleImageVisibility = (image) => {
//         const observer = new IntersectionObserver(
//             ([entry]) => setVisible(entry.isIntersecting),
//             { threshold: 0.5 }
//         );
//         const target = document.getElementById(image.generatedId);
//         if (target) observer.observe(target);
//
//         return () => observer.disconnect();
//     };
//
//     useEffect(() => {
//         if (selectedImage) handleImageVisibility(selectedImage);
//     }, [selectedImage]);
//
//     return (
//         <>
//             <Head>
//                 <title>Photography Gallery</title>
//             </Head>
//             <main style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
//
//                 {/* Horizontal Navigation */}
//                 {/**/}
//
//                 {/* Vertical Navigation */}
//                 {/* Infinite scroll content */}
//                 {/* Display details on click */}
//                 {/* remove details on scroll away  */}
//
//                 {/* Horizontal Bar */}
//                 {!selectedYear && (
//                     <div
//                         style={{
//                             display: "flex",
//                             overflowX: "auto",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             padding: "20px",
//                             width: "100%",
//                             height: "100%",
//                         }}
//                     >
//                         {galleries.map((gallery) => (
//                             <div
//                                 key={gallery.year}
//                                 style={{ margin: "0 20px", cursor: "pointer" }}
//                                 onClick={() => handleYearClick(gallery.year)}
//                             >
//                                 <img
//                                     src={gallery.images[0]?.image || ""}
//                                     alt={gallery.images[0]?.alt || "Thumbnail"}
//                                     style={{
//                                         display: "block",
//                                         width: "500px",
//                                         height: "500px",
//                                         objectFit: "cover",
//                                         borderRadius: "10px",
//                                     }}
//                                 />
//                                 <p style={{ textAlign: "center", marginTop: "10px" }}>{gallery.year}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//
//                 {/* Vertical Bar */}
//                 {selectedYear && (
//                     <div
//                         ref={verticalScrollRef}
//                         onScroll={handleScroll}
//                         style={{
//                             flex: 1,
//                             padding: "20px",
//                             overflowY: "auto",
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             gap: "20px",
//                             height: "100%",
//                         }}
//                     >
//                         {galleries
//                             .find((gallery) => gallery.year === selectedYear)
//                             ?.images.map((image) => (
//                                 <div
//                                     key={image.generatedId}
//                                     id={image.generatedId}
//                                     style={{
//                                         width: "500px",
//                                         height: "500px",
//                                         cursor: "pointer",
//                                         position: "relative",
//                                     }}
//                                     onClick={() => setSelectedImage(image)}
//                                 >
//                                     <img
//                                         src={image.image}
//                                         alt={image.alt || "Image"}
//                                         style={{
//                                             width: "100%",
//                                             height: "100%",
//                                             objectFit: "cover",
//                                             borderRadius: "10px",
//                                         }}
//                                     />
//                                 </div>
//                             ))}
//                     </div>
//                 )}
//
//                 {/* Details Sidebar */}
//                 {selectedImage && visible && (
//                     <div
//                         style={{
//                             flexShrink: 0,
//                             width: "300px",
//                             padding: "20px",
//                             borderLeft: "1px solid #ccc",
//                             backgroundColor: "#f9f9f9",
//                         }}
//                     >
//                         <h2>{selectedImage.title || "Image Details"}</h2>
//                         <img
//                             src={selectedImage.image}
//                             alt={selectedImage.alt || "Image"}
//                             style={{
//                                 display: "block",
//                                 width: "100%",
//                                 borderRadius: "10px",
//                                 marginBottom: "20px",
//                             }}
//                         />
//                         <p>Camera: {selectedImage.metadata.camera || "N/A"}</p>
//                         <p>Lens: {selectedImage.metadata.lens || "N/A"}</p>
//                         <p>Shutter Speed: {selectedImage.metadata.shutterSpeed || "N/A"}</p>
//                         <p>ISO: {selectedImage.metadata.iso || "N/A"}</p>
//                         <p>Aperture: {selectedImage.metadata.aperture || "N/A"}</p>
//                     </div>
//                 )}
//             </main>
//         </>
//     );
// }
//
// export async function getStaticProps() {
//     const galleries = await sanityClient.fetch(GET_GALLERY);
//     return {
//         props: { galleries },
//     };
// }
