import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/works";

export const dynamicParams = false;

export function generateStaticParams() {
    return works.map((work) => ({ slug: work.slug }));
}

export default async function WorkDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const work = works.find((w) => w.slug === slug);

    if (!work) {
        notFound();
    }

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
            <Link
                href="/#works"
                className="mt-12 text-lg opacity-60 hover:opacity-100 transition-opacity"
            >
                &larr; Back to Works
            </Link>
        </main>
    );
}
