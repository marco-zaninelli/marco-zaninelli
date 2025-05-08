import {useState} from "react";

export default function HomeInspect ({children, tooltip}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span className="relative">
            {/* Word with question mark */}
            <span className="relative pr-4 cursor-help"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
            >
                {children}
                <span
                    className="absolute top-0 -right-3 w-6 h-6 border-2 rounded-full bg-gray-200 text-xl text-black flex items-center justify-center font-bold"
                >
                    ?
                </span>
            </span>

            {/* Popup */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 w-full max-w-xl px-4 py-2 text-white text-xl rounded-lg shadow-lg z-50 backdrop-blur bg-black bg-opacity-80 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
            >
                {tooltip}
            </div>
        </span>
    );
}
