import {useRef, useState, useEffect, useCallback} from "react";

export default function ScrollToSelect ({items, onCurrentSelection}) {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const [selected, setSelected] = useState(0);
    const [bottomPadding, setBottomPadding] = useState(0);

    // Calculate paddings for the list
    const itemHeight = 35; // px
    const topPadding = itemHeight - 5;

    // Calculate bottom padding when component mounts and when container size changes
    useEffect(() => {
        const updateBottomPadding = () => {
            if (containerRef.current) {
                const containerHeight = containerRef.current.clientHeight;
                setBottomPadding(Math.max(containerHeight - itemHeight - topPadding, 0));
            }
        };

        // Initial calculation
        updateBottomPadding();

        // Add resize observer to update padding when container size changes
        const resizeObserver = new ResizeObserver(updateBottomPadding);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [itemHeight, topPadding]);


    const onScroll = useCallback(() => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();

        // Find the first visible item after the top padding
        let bestIdx = selected;
        const topPadding = itemHeight / 2; // Half item height padding

        for (let idx = 0; idx < itemRefs.current.length; idx++) {
            const el = itemRefs.current[idx];
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            // Check if the element is the first one after the top padding
            if (rect.top >= containerRect.top + topPadding) {
                bestIdx = idx;
                break;
            }
        }

        if (bestIdx !== selected) {
            setSelected(bestIdx);
        }
    }, [selected, itemHeight]);


    useEffect(() => {
        const c = containerRef.current;
        if (!c) return;
        c.addEventListener("scroll", onScroll, {passive: true});
        onScroll();
        return () => c.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    useEffect(() => {
        if (typeof onCurrentSelection === "function") {
            onCurrentSelection(selected);
        }
    }, [selected, onCurrentSelection]);

    return (

        <section
            ref={containerRef}
            className="w-full h-full max-w-2xl mx-auto flex flex-col items-center overflow-y-scroll gap-y-[10px]"
            style={{
                paddingTop: `${topPadding}px`,
                paddingBottom: `${bottomPadding}px`
            }}
        >
        {items.map((item, i) => (
                <label
                    key={i}
                    ref={el => (itemRefs.current[i] = el)}
                    className={`
              w-[90%] px-5
              grid grid-cols-[auto,1fr,auto] snap-center ease-in-out duration-300 transition-all rounded-full
              ${i === selected ? "bg-accent" : ""}
            `}
                    style={{
                        height: `${itemHeight}px`,
                        lineHeight: `${itemHeight}px`
                    }}

                >
                    <p className="pr-4">{String(i + 1).padStart(2, "0")}</p>
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <input
                        type="radio"
                        name="items"
                        checked={i === selected}
                        readOnly
                        className="appearance-none"
                    />
                </label>
            ))}
        </section>
    );
}
