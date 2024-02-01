import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Deadalus",
  description:
    "A fractional asset protocol on Starknet."
};

const agenorFont = localFont({
  src: [
    {
      path: "../font/Agenor/Agenor-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../font/Agenor/AgenorNeue-Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${agenorFont.className} font-normal`}>
        {children}
      </body>
    </html>
  );
}

//
