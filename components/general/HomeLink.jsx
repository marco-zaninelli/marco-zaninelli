import Link from "next/link";
import { motion } from "framer-motion";

const HomeLink = ({children, href}) => (
    <Link href={href}>
        <motion.span
            className="uppercase inline-block leading-tight align-middle px-4 border-2"
            whileHover={{ 
                scale: 1.05,
                color: "#0f6c4d",
                borderColor: "#0f6c4d",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.8)",
                backdropFilter: "blur(4px)",
            }}
            transition={{
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.span>
    </Link>
);

export default HomeLink;