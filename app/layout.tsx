import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

// import font from google
const font = Nunito({ subsets: ["latin"] });

// metadata = head with details of the website
export const metadata: Metadata = {
  title: "TMK-DEV Fullstack Airbnb",
  description:
    "TMK-DEV Fullstack Airbnb website using React, Next, Tailwind; Prisma, MongoDB, NextAuth and more ..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
