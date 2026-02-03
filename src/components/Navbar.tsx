"use client";

export default function Navbar() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-[4.5rem] z-10 flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b border-black/5">
            <button onClick={scrollToTop} className="tracking-widest font-[family-name:var(--font-goldman)] text-base bg-transparent border-none cursor-pointer">
                mizsaka.
            </button>
            <nav className="font-[family-name:var(--font-goldman)] flex items-center gap-6 text-base tracking-widest">
                <button onClick={() => scrollToSection("about")} className="bg-transparent border-none cursor-pointer">about</button>
                <button onClick={() => scrollToSection("works")} className="bg-transparent border-none cursor-pointer">works</button>
                <button onClick={() => scrollToSection("contact")} className="bg-transparent border-none cursor-pointer">contact</button>
            </nav>
        </header>
    );
}
