// ./frontend/app/layout.js

import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { bodyFont } from "@/utils/fonts";

export const metadata = {
  title: "BlockBoard",
  description: "BlockBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="G-7EE9HWCSDS" />
      </head>
      <body
        className={`${bodyFont.className} antialiased bg-background text-foreground`}
      >
        <main className="container max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}