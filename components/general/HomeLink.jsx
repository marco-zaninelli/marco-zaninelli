import Link from "next/link";
import { motion } from "framer-motion";

const HomeLink = ({children, href}) => (
    <Link href={href}>
        <motion.span
            className="uppercase inline-block leading-tight align-middle px-4 border-accent border-2 text-accent"
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(0,0,0,0.8)",
                backdropFilter: "blur(4px)",
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.span>
    </Link>
);

export default HomeLink;