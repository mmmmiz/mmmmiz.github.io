"use client";

export default function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="relative z-0 min-h-screen flex flex-col justify-center items-center py-10 px-5">
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-widest mb-5 font-[family-name:var(--font-goldman)]">
                mizsaka.
            </h1>
            <p className="text-xl font-light opacity-80 max-w-lg text-center leading-loose mb-10">
                portfolio
            </p>
            <button
                onClick={scrollToAbout}
                className="flex justify-center items-center w-24 h-24 text-black no-underline transition-all duration-300 cursor-pointer animate-bounce-custom hover:paused bg-transparent border-none"
                aria-label="下へスクロール"
            >
                <span className="material-symbols-outlined !text-5xl">
                    keyboard_double_arrow_down
                </span>
            </button>
        </main>
    );
}
