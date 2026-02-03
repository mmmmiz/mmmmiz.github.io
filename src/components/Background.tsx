"use client";

import { useEffect, useRef } from "react";

export default function Background() {
    const fluidTopRef = useRef<HTMLDivElement>(null);
    const fluidBottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fluidTop = fluidTopRef.current;
        const fluidBottom = fluidBottomRef.current;

        // Top fluid colors (Original: #d6ff00 -> #30eeee)
        const startTop = [214, 255, 0];
        const endTop = [48, 238, 238];

        // Bottom fluid colors (Requested: #cf85f9ff　-> #f988b9ff)
        const startBottom = [207, 133, 249];
        const endBottom = [249, 136, 185];

        function lerp(a: number, b: number, t: number) {
            return Math.round(a + (b - a) * t);
        }

        function getColor(start: number[], end: number[], p: number) {
            return [
                lerp(start[0], end[0], p),
                lerp(start[1], end[1], p),
                lerp(start[2], end[2], p),
            ];
        }

        function updateFluidColor() {
            const doc = document.documentElement;
            const scrollTop = doc.scrollTop || document.body.scrollTop;
            const scrollHeight = doc.scrollHeight - doc.clientHeight;
            const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            const t = Math.min(Math.max(p, 0), 1);

            if (fluidTop) {
                const [r, g, b] = getColor(startTop, endTop, t);
                fluidTop.style.background = `rgb(${r}, ${g}, ${b})`;
            }

            if (fluidBottom) {
                const [r, g, b] = getColor(startBottom, endBottom, t);
                fluidBottom.style.background = `rgb(${r}, ${g}, ${b})`;
            }
        }

        window.addEventListener("scroll", updateFluidColor, { passive: true });
        window.addEventListener("resize", updateFluidColor);
        updateFluidColor();

        return () => {
            window.removeEventListener("scroll", updateFluidColor);
            window.removeEventListener("resize", updateFluidColor);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10 blur-3xl scale-125">
            {/* 流体シェイプ */}
            <div
                ref={fluidBottomRef}
                className="w-[50vh] h-[50vh] absolute right-[-5%] left-auto md:left-[-5%] md:right-auto bottom-[-5%] animate-fluidrotate2"
                style={{ background: "#cf85f9ff" }} // Initial color
            ></div>
            <div
                ref={fluidTopRef}
                className="w-[90vh] h-[90vh] absolute right-[5%] top-[5%] animate-fluidrotate"
                style={{ background: "#d6ff00" }} // Initial color
            ></div>
        </div>
    );
}
