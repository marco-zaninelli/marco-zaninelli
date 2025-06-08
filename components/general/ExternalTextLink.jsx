import {motion} from "framer-motion";

const linkMotion = {
    hover: {
        color: "#0f6c4d",
        transition: {duration: 0.2}
    },
    tap: {
        scale: 0.95
    }
};

export default function ExternalTextLink ({href, children}) {
    return (
        <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={linkMotion}
            className="inline-block"
        >
            <a
                className="underline cursor-pointer"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </motion.div>
    );
}