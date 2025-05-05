import { useState } from "react";
import { urlFor } from "@/utils/image-url";

export default function ProjectsTable({ data, selected }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const isLargeScreen = () => window.matchMedia("(min-width: 1024px)").matches;

    const handleMouseEnter = (project) => {
        if (isLargeScreen()) {
            selected(urlFor(project.thumbnail).url());
        }
    };

    const handleMouseLeave = () => {
        if (isLargeScreen()) {
            selected(null);
        }
    };

    const handleClick = (index, project) => {
        if (isLargeScreen()) {
            window.location.href = `/work/${project.slug.current}`;
        } else {
            setActiveIndex(index);
            selected(urlFor(project.thumbnail).url());
        }
    };

    return (
        <div className="overflow-x-auto">
            {/* Custom table body */}
            <div>
                {data.map((project, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-[auto,1fr,auto] cursor-pointer items-center border lg:border-0  lg:border-b lg:border-white lg:opacity-100 ${
                            activeIndex === index
                                ? "border-white z-10"
                                : "border-transparent opacity-50"
                        }`}

                        onClick={() => handleClick(index, project)}
                        onMouseEnter={() => handleMouseEnter(project)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="py-4 px-4">
                            <h4>{String(index + 1).padStart(2, "0")}</h4>
                        </div>
                        <div className="py-4 px-4">
                            <h4>{project.title}</h4>
                        </div>
                        <div className="py-4 px-4">
                            <h4>{project.category}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
