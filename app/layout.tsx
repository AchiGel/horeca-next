import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Horeca Georgia",
  description: "Your blog description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col dark:bg-[1c1c1d] min-h-screen dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex grow justify-center items-center max-w-360 mx-auto w-full">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
