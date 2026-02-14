"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

const works = [
    { slug: "story", title: "実績１", image: "/works/story_01.png" },
    { slug: "story2", title: "実績２", image: "/works/story2_01.png" },
    { slug: "castcell", title: "実績３", image: "/works/castcell_01.png" },
    { slug: "celldes", title: "実績４", image: "/works/celldes_01.png" },
    { slug: "cns", title: "実績５", image: "/works/cns.png" },
    { slug: "dummy", title: "実績６", image: "/works/dummy.png" },
];

export default function WorkDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = React.use(params);
    const router = useRouter();
    const work = works.find((w) => w.slug === slug);

    if (!work) {
        notFound();
    }

    const handleBack = () => {
        router.push("/");
        // Wait for navigation, then scroll to works section
        setTimeout(() => {
            const section = document.getElementById("works");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <main className="min-h-screen flex flex-col justify-center items-center px-8 py-20">
            <h1 className="text-4xl mb-8 tracking-widest font-[family-name:var(--font-goldman)]">
                {work.title}
            </h1>
            <img
                src={work.image}
                alt={work.title}
                className="border-[3px] rounded-sm max-w-2xl w-full"
            />
            <button
                onClick={handleBack}
                className="mt-12 text-lg opacity-60 hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
            >
                &larr; Back to Works
            </button>
        </main>
    );
}
