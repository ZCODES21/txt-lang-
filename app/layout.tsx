
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata: Metadata = {
  title: "ZEROCODES MOVIES",
  description: "yawa basta i check imong mga movies",
  icons: "https://cdn-icons-png.flaticon.com/512/1137/1137143.png",
};

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
