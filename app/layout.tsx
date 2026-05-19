import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Febi Susan Sajan | BCA Student Portfolio",
  description:
    "Portfolio of Febi Susan Sajan - BCA Student at Marian College. Passionate about technology, problem solving, and building innovative IT solutions.",
  keywords:
    "Febi Susan Sajan,BCA,Marian College,Portfolio,Web Developer,IT Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-background min-h-screen text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
