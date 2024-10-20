// ./frontend/app/layout.js

import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { bodyFont } from "./utils/fonts";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
        className={`${bodyFont} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="container max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}