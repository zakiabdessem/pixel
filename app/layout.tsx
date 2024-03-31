import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sultana",
  description: "Découvrez l'élégance intemporelle chez Sultana. Sublimez votre style avec des choix de mode chics qui définissent la sophistication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <nav className="p-8 pb-4 bg-gray-50">
          <ul>
            <li>
              <a href="/">
                <Image priority={false} src="/sultana.svg" alt="" width={138} height={37} />
              </a>
            </li>
          </ul>
        </nav>
        <main className="min-h-[80vh] bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
