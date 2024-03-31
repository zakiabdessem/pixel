import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sultana",
  description:
    "Découvrez l'élégance intemporelle chez Sultana. Sublimez votre style avec des choix de mode chics qui définissent la sophistication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/0203bed5a5450d1496d8df3fb00b6fa1?family=Noev"
          rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <nav className="p-4 pb-4 bg-gray-50">
          <ul className="flex justify-between items-center w-full">
            <li className="w-full md:ml-12">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/%D9%88%D8%B1%D8%A7%D9%82%D8%A9+%D8%B4%D8%A8%D8%B9%D8%A7%D9%86%D9%89+papeterie+Chebaani%E2%80%AD/@35.5445632,6.1687318,15z/data=!4m6!3m5!1s0x12f41112e8d07479:0x9121171b7fc9ecc3!8m2!3d35.5445632!4d6.1687318!16s%2Fg%2F11g0w461w9?entry=ttu">
                <Image src="/logo.png" width={108} height={52} alt="Location" />
              </a>
            </li>
            <li className="md:w-full max-lg:hidden">
              <Button
                className="bg-primary text-white rounded-full px-12"
                variant="ghost">
                Home
              </Button>
              <Button className=" px-12">Store</Button>
            </li>
            <li>
              <a
                className="max-lg:hidden"
                target="_blank"
                href="https://www.instagram.com/pixel.photolab/">
                <Button
                  className="bg-primary text-white rounded-full px-12"
                  variant="ghost">
                  Contact us
                </Button>
              </a>

              <div className="lg:hidden">
                <Menu height={32} width={32} />
              </div>
            </li>
          </ul>
        </nav>
        <main className="min-h-[80vh] bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
