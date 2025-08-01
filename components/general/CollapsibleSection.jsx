import {useState} from "react";

export default function CollapsibleSection ({title, children}) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="py-2 mt-8">
            {/* Title (always visible) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center w-full text-left text-white hover:text-gray-200"
            >
                <h3 className="flex gap-x-4">
                    <span className={`transition-transform text-md ${isOpen ? "rotate-180" : ""}`}>
                        ▼
                    </span>
                    {title}
                </h3>
            </button>

            {/* Collapsible Content */}
            {isOpen && (
                <span className="mt-2 text-gray-300  max-w-full">
                    {children}
                </span>
            )}
        </div>
    );
}
