import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 h-[4.5rem] z-10 flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b border-black/5">
            <Link href="#" className="tracking-[0.15em] font-[family-name:var(--font-goldman)] text-base">
                mizsaka.
            </Link>
            <nav className="font-[family-name:var(--font-goldman)] flex items-center gap-6 text-base tracking-[0.08em]">
                <Link href="#about">about</Link>
                <Link href="#works">works</Link>
                <Link href="#contact">contact</Link>
            </nav>
        </header>
    );
}
