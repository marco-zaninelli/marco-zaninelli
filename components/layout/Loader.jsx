import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Logo from "@/public/img/Logo";

// Loader.jsx
export default function Loader({loading, onStartExit}) {
    const [showLoader, setShowLoader] = useState(false);
    const startTime = useRef(0);
    const minLoadTime = 2;
    const fadeTime = 0.3;
    const realMinLoadTime = minLoadTime * 1000;

    useEffect(() => {
        if (loading) {
            startTime.current = Date.now();
            setShowLoader(true);
        } else if (showLoader) {
            const elapsedTime = Date.now() - startTime.current;
            if (elapsedTime < realMinLoadTime) {
                const remainingTime = realMinLoadTime - elapsedTime;
                setTimeout(() => {
                    onStartExit?.(); // Notify parent before starting fade
                    setShowLoader(false);
                }, remainingTime);
            } else {
                onStartExit?.(); // Notify parent before starting fade
                setShowLoader(false);
            }
        }
    }, [loading, showLoader, onStartExit]);


    return (
        <AnimatePresence>
            {showLoader && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black flex items-center justify-center z-[29]"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: fadeTime}}
                    >
                        <div className="relative w-1/2">
                            <motion.div
                                initial={{
                                    clipPath: "inset(100% 0% 0% 0%)",
                                    opacity: 1
                                }}
                                animate={{
                                    clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"],
                                    opacity: [1, 1, 0, 0]
                                }}
                                transition={{
                                    duration: minLoadTime,
                                    repeat: Infinity,
                                    times: [0, 0.8, 0.99, 1],
                                    ease: "easeInOut"
                                }}
                                className="h-full w-full"
                            >
                                <Logo className="h-auto w-full opacity-40" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Noise Texture */}
                    <motion.div
                        className="fixed inset-0 bg-no-repeat bg-cover z-[30]"
                        initial={{opacity: 0}}
                        animate={{opacity: 0.1}}
                        exit={{opacity: 0}}
                        transition={{duration: fadeTime}}
                        style={{
                            backgroundImage: "url('/img/noise.svg')"
                        }}
                    />
                </>
            )}
        </AnimatePresence>
    );
}