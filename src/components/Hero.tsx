import Link from "next/link";

export default function Hero() {
    return (
        <main className="relative z-0 min-h-screen flex flex-col justify-center items-center py-10 px-5">
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-widest mb-5 font-[family-name:var(--font-goldman)]">
                mizsaka.
            </h1>
            <p className="text-xl font-light opacity-80 max-w-lg text-center leading-loose mb-10">
                portfolio
            </p>
            <Link
                href="#about"
                className="flex justify-center items-center w-24 h-24 text-black no-underline transition-all duration-300 cursor-pointer animate-bounce-custom hover:paused"
                aria-label="下へスクロール"
            >
                <span className="material-symbols-outlined !text-5xl">
                    keyboard_double_arrow_down
                </span>
            </Link>
        </main>
    );
}
