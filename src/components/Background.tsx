"use client";

import { useEffect, useRef } from "react";

export default function Background() {
    const fluidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fluid = fluidRef.current;
        if (!fluid) return;

        const start = [214, 255, 0]; // #d6ff00
        const end = [48, 238, 238]; // #30eeee

        function lerp(a: number, b: number, t: number) {
            return Math.round(a + (b - a) * t);
        }

        function colorForProgress(p: number) {
            const t = p;
            return [
                lerp(start[0], end[0], t),
                lerp(start[1], end[1], t),
                lerp(start[2], end[2], t),
            ];
        }

        function updateFluidColor() {
            if (!fluid) return;
            const doc = document.documentElement;
            const scrollTop = doc.scrollTop || document.body.scrollTop;
            const scrollHeight = doc.scrollHeight - doc.clientHeight;
            const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            const [r, g, b] = colorForProgress(Math.min(Math.max(p, 0), 1));
            fluid.style.background = `rgb(${r}, ${g}, ${b})`;
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
                ref={fluidRef}
                className="w-[80vh] h-[80vh] absolute right-[15%] top-[5%] animate-fluidrotate"
                style={{ background: "#d6ff00" }} // Initial color
            ></div>
        </div>
    );
}
