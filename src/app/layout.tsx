import type { Metadata } from "next";
import "./globals.css";
import { Goldman, Noto_Sans_JP } from "next/font/google";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-goldman",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "mizsaka.portfolio",
  description: "Portfolio of mizsaka",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=keyboard_double_arrow_down"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${goldman.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
