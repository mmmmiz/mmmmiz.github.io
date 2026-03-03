export type Work = {
    slug: string;
    title: string;
    image: string;
};

export const works: Work[] = [
    { slug: "story", title: "実績１", image: "/works/story_01.png" },
    { slug: "story2", title: "実績２", image: "/works/story2_01.png" },
    { slug: "castcell", title: "実績３", image: "/works/castcell_01.png" },
    { slug: "celldes", title: "実績４", image: "/works/celldes_01.png" },
    { slug: "cns", title: "実績５", image: "/works/cns.png" },
    { slug: "dummy", title: "実績６", image: "/works/noimage.png" },
];
