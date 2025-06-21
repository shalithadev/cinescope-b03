import NextTopLoader from "nextjs-toploader";
import { inter } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "CineScope Movies Database - BO3",
  description: "Find your favorite movie ratings and recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader color="#1dd1a1" speed={400} crawlSpeed={400} />
        {children}
      </body>
    </html>
  );
}
