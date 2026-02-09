import Link from "next/link";

export default function Works() {
    return (
        <>
            {/* Works セクション */}
            <article id="works">
                <section className="relative z-0 min-h-screen flex flex-col justify-center items-center bg-white/3 bg-white/25 backdrop-blur-xl rounded-3xl ">
                    <div className="flex items-center w-full py-16 px-20 text-center max-sm:px-8 max-sm:py-10 max-sm:mx-4 gap-10">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">
                                works
                            </h2>
                            <p className="text-base opacity-60 mb-10 leading-loose">
                                実績１
                            </p>
                            <img
                                src="/works/story_01.png"
                                alt="実績1"
                                className="border-[3px] rounded-sm"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">
                                works
                            </h2>
                            <p className="text-base opacity-60 mb-10 leading-loose">
                                実績１
                            </p>
                            <img
                                src="/works/story2_01.png"
                                alt="実績1"
                                className="border-[3px] rounded-sm"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">
                                works
                            </h2>
                            <p className="text-base opacity-60 mb-10 leading-loose">
                                実績１
                            </p>
                            <img
                                src="/works/castcell_01.png"
                                alt="実績1"
                                className="border-[3px] rounded-sm"
                            />
                        </div>

                    </div>
                    <div className="flex items-center w-full py-16 px-20 text-center max-sm:px-8 max-sm:py-10 max-sm:mx-4 gap-10">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">
                                works
                            </h2>
                            <p className="text-base opacity-60 mb-10 leading-loose">
                                実績１
                            </p>
                            <img
                                src="/works/celldes_01.png"
                                alt="実績1"
                                className="border-[3px] rounded-sm"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">
                                works
                            </h2>
                            <p className="text-base opacity-60 mb-10 leading-loose">
                                実績１
                            </p>
                            <img
                                src="/works/cns.png"
                                alt="実績1"
                                className="border-[3px] rounded-sm"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">
                                works
                            </h2>
                            <p className="text-base opacity-60 mb-10 leading-loose">
                                実績１
                            </p>
                            <img
                                src="/works/dummy.png"
                                alt="実績1"
                                className="border-[3px] rounded-sm"
                            />
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
