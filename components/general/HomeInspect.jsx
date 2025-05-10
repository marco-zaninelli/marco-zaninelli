import { useState, useEffect } from "react";

export default function HomeInspect({ children, tooltip }) {
    const [isOpen, setIsOpen] = useState(false);
    const [touchOnly, setTouchOnly] = useState(false);

    useEffect(() => {
        // detect devices that don’t support hover
        const mq = window.matchMedia("(hover: none)");
        setTouchOnly(mq.matches);
        const handler = (e) => setTouchOnly(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((v) => !v);

    return (
        <span className="relative">
      <span
          className="relative cursor-help"
          {...(touchOnly
              ? { onClick: toggle }
              : { onMouseEnter: open, onMouseLeave: close })}
      >
        {children}
          <span className="inline-flex align-top ml-1 font-bold border rounded-full items-center justify-center w-4 h-4 text-xs sm:w-5 sm:h-5 sm:text-md sm:border-2 xl:w-6 xl:h-6 xl:text-xl">
          ?
        </span>
      </span>

      <div
          className={`absolute left-1/2 -translate-x-1/2 w-full max-w-screen px-4 py-2 text-white text-xl rounded-lg shadow-lg z-50 backdrop-blur bg-black bg-opacity-80 transition-all duration-300 ease-in-out ${
              isOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-2 pointer-events-none"
          }`}
      >
        {tooltip}
      </div>
    </span>
    );
}
