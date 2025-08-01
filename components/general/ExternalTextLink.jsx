import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const linkMotion = {
    hover: {
        color: "#0f6c4d",
        transition: { duration: 0.2 },
    },
    tap: {
        scale: 0.95,
    },
};

export default function ExternalTextLink({ href, children }) {
    return (
        <motion.span
            whileHover="hover"
            whileTap="tap"
            variants={linkMotion}
            className="inline-block"
        >
            <a
                className="underline inline-flex items-start cursor-pointer"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* use a span instead of a <p> */}
                <span>{children}</span>

                {/* inline-block + vertical-align keeps the icon at the top */}
                <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    aria-hidden="true"
                    className="inline-block w-2 h-2 ml-1 align-text-top"
                    style={{ verticalAlign: "text-top" }}
                />
            </a>
        </motion.span>
    );
}
