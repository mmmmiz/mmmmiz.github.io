import Link from "next/link";

const works = [
    { slug: "story", title: "実績１", image: "/works/story_01.png" },
    { slug: "story2", title: "実績２", image: "/works/story2_01.png" },
    { slug: "castcell", title: "実績３", image: "/works/castcell_01.png" },
    { slug: "celldes", title: "実績４", image: "/works/celldes_01.png" },
    { slug: "cns", title: "実績５", image: "/works/cns.png" },
    { slug: "dummy", title: "実績６", image: "/works/noimage.png" },
];

export default function Works() {
    return (
        <>
            {/* Works セクション */}
            <section id="works" className="py-16 px-20 text-center max-sm:px-8 max-sm:py-10 max-sm:mx-4">
                <section className="py-16 px-20 bg-white/25 backdrop-blur-xl rounded-3xl relative z-0 min-h-screen flex flex-col justify-center items-center">
                    <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">works</h2>
                    <div className="flex items-center w-full text-center max-sm:px-8 max-sm:py-10 max-sm:mx-4 gap-10">
                        {works.slice(0, 3).map((work) => (
                            <Link
                                key={work.slug}
                                href={`/works/${work.slug}`}
                                className="flex flex-col justify-center items-center"
                            >
                                <p className="text-base opacity-60 mb-10 leading-loose">
                                    {work.title}
                                </p>
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="border-[3px] rounded-sm"
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center w-full text-center max-sm:px-8 max-sm:py-10 max-sm:mx-4 gap-10">
                        {works.slice(3, 6).map((work) => (
                            <Link
                                key={work.slug}
                                href={`/works/${work.slug}`}
                                className="flex flex-col justify-center items-center"
                            >
                                <p className="text-base opacity-60 mb-10 leading-loose">
                                    {work.title}
                                </p>
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="border-[3px] rounded-sm"
                                />
                            </Link>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
}
