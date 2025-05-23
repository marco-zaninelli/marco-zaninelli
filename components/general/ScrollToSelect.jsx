import React, { useRef, useState, useEffect, useCallback } from 'react';

const ITEM_HEIGHT = 35;

export default function ScrollToSelect({ items, onCurrentSelection }) {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [bottomPadding, setBottomPadding] = useState(0);

    // Adjust bottom padding to allow the last item to snap into view
    useEffect(() => {
        const updatePadding = () => {
            if (!containerRef.current) return;
            const height = containerRef.current.clientHeight;
            setBottomPadding(Math.max(height - ITEM_HEIGHT, 0));
        };

        updatePadding();
        const observer = new ResizeObserver(updatePadding);
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Handle scroll to update the selected index
    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const topBoundary = container.getBoundingClientRect().top;
        const idx = itemRefs.current.findIndex(el => {
            if (!el) return false;
            return el.getBoundingClientRect().top >= topBoundary;
        });
        const newIndex = idx >= 0 ? idx : selectedIndex;

        if (newIndex !== selectedIndex) {
            setSelectedIndex(newIndex);
            onCurrentSelection(newIndex);
        }
    }, [onCurrentSelection, selectedIndex]);

    // Attach scroll listener
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <section
            ref={containerRef}
            className="w-full h-full flex flex-col items-center overflow-y-scroll gap-y-2.5 snap-y snap-mandatory smooth-scroll"
            style={{ paddingBottom: bottomPadding }}
        >
            {items.map((item, index) => (
                <label
                    key={index}
                    ref={el => (itemRefs.current[index] = el)}
                    className={`
            w-full px-5 grid grid-cols-[auto,1fr,auto] snap-start transition-all duration-300 ease-in-out rounded-full
            ${selectedIndex === index ? 'bg-accent' : ''}
          `}
                    style={{ height: ITEM_HEIGHT, lineHeight: `${ITEM_HEIGHT}px` }}
                >
                    <p className="pr-4">{String(index + 1).padStart(2, '0')}</p>
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <input
                        type="radio"
                        name="items"
                        checked={selectedIndex === index}
                        readOnly
                        className="appearance-none"
                    />
                </label>
            ))}
        </section>
    );
}