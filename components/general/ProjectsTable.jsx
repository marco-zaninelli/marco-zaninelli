import {useState} from "react";
import Link from "next/link";

export default function ProjectsTable ({items, selected}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        selected(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        selected(null);
    };

    return (
        <div className="overflow-x-auto">
            {/* Custom table body */}
            <div>
                {items.map((item, index) => (
                    <Link
                        href={`/work/${item.slug}` || ""}
                        key={index}
                        className={"grid grid-cols-[auto,1fr,auto] cursor-pointer items-center border border-0  border-b border-white"}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="py-4 px-4">
                            <p>{String(index + 1).padStart(2, "0")}</p>
                        </div>
                        <div className="py-4 px-4">
                            <p>{item.title}</p>
                        </div>
                        <div className="py-4 px-4">
                            <p>{item.category}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
