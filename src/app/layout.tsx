import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--lato",
});

export const metadata: Metadata = {
  title: "Payguard",
  description: "Best payment solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}  font-lato bg-primary`}>
        {children}
      </body>
    </html>
  );
}
