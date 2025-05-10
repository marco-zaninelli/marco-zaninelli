import {useState, useEffect} from "react";

export default function HomeInspect ({children, tooltip}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isTouchOnly, setIsTouchOnly] = useState(false);

    useEffect(() => {
        // detect if device does NOT support hover
        const mq = window.matchMedia("(hover: none)");
        const handler = (e) => setIsTouchOnly(e.matches);
        setIsTouchOnly(mq.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((v) => !v);

    return (
        <span className="inline-block relative">
      <span
          className="inline-flex items-center cursor-help"
          {...(isTouchOnly
              ? {onClick: toggle}
              : {onMouseEnter: open, onMouseLeave: close})}
      >
        {children}
          <span className="inline-flex align-top ml-1 items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-xs sm:text-base font-bold border-2 rounded-full">
          ?
        </span>
      </span>

      <div
          className={`absolute top-full mt-2 z-50 bg-black bg-opacity-80 text-white text-base sm:text-xl px-4 py-2 rounded-lg shadow-lg backdrop-blur transition-all duration-200 ease-in-out left-0 w-full md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {tooltip}
      </div>
    </span>
    );
}
