import "./globals.css";
import { bodyFont } from "./utils/fonts";

export const metadata = {
  title: "BlockBoard",
  description: "BlockBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}