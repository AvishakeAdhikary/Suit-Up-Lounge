import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alfphabet = localFont({
  src: [
    {
      path: '../public/fonts/alfphabet/alfphabet_condensed.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/alfphabet/alfphabet_iv.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-alfphabet',
})

const lobster = localFont({
  src: [
    {
      path: '../public/fonts/lobster/lobster_regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-lobster',
})

export const metadata: Metadata = {
  title: "Suit-Up Lounge",
  description: "Official Suit-Up Lounge Discord Server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alfphabet.variable} ${lobster.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
