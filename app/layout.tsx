import "./styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import React from "react";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "ჰორეკა საქართველო | Horeca Georgia",
    template: "%s | Horeca Georgia",
  },
  description: "ისტორია, აქტუალური ამბები, ინოვაციები და ტენდენციები",
  metadataBase: new URL("https://horecageorgia.ge"),

  icons: {
    icon: [
      { url: "/Horeca_logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Horeca Georgia",
    description: "ისტორია, აქტუალური ამბები, ინოვაციები და ტენდენციები",
    url: "https://horecageorgia.ge",
    siteName: "Horeca Georgia",
    images: [
      {
        url: "/Horeca_logo.png",
        width: 1200,
        height: 630,
        alt: "Horeca Georgia",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Horeca Georgia",
    description: "ისტორია, აქტუალური ამბები, ინოვაციები და ტენდენციები",
    images: ["/Horeca_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col dark:bg-[#1c1c1d] min-h-screen dark:text-white">
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
