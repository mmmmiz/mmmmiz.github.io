import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="relative z-0 min-h-[60vh] flex justify-center items-center py-20 px-5">
            <div className="bg-white/25 backdrop-blur-xl rounded-3xl py-16 px-20 max-w-lg text-center max-sm:px-8 max-sm:py-10 max-sm:mx-4">
                <h2 className="text-4xl mb-4 tracking-widest font-[family-name:var(--font-goldman)]">
                    contact
                </h2>
                <p className="text-base opacity-60 mb-10 leading-loose">
                    お仕事のご依頼・ご相談はお気軽にどうぞ
                </p>

                <div className="flex flex-col gap-5">
                    {/* メールリンク */}
                    <Link
                        href="mailto:mmmmmm64sa@gmail.com"
                        className="flex items-center justify-center gap-3 py-4 px-8 bg-white/30 rounded-xl no-underline text-gray-800 text-base font-[family-name:var(--font-goldman)] tracking-wider transition-all duration-300 hover:bg-white/80 hover:-translate-y-0.5 hover:shadow-lg max-sm:py-4 max-sm:px-6 max-sm:text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 shrink-0"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        mmmmmm64sa@gmail.com
                    </Link>

                    {/* Qiitaリンク */}
                    <Link
                        href="https://qiita.com/mizsaka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 py-4 px-8 bg-white/30 rounded-xl no-underline text-gray-800 text-base font-[family-name:var(--font-goldman)] tracking-wider transition-all duration-300 hover:bg-white/80 hover:-translate-y-0.5 hover:shadow-lg max-sm:py-4 max-sm:px-6 max-sm:text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 shrink-0"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                        Qiita (@mizsaka)
                    </Link>
                </div>
            </div>
        </section>
    );
}
