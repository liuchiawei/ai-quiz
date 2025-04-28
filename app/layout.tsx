import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import LetterGlitch from "@/components/LetterGlitch";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "AIテスト",
  description: "AIについてのテストを行います。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoMono.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </body>
    </html>
  );
}
