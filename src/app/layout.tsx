import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "jiu-jit · shū",
  description: "A Jiu-Jitsu app for making and tracking progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} flex`}>
        <Navbar />
        <div className="p-10 w-full">{children}</div>
      </body>
    </html>
  );
}
