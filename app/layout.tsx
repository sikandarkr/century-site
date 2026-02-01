import "./globals.css";
import Header from "./components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Century Hybrid Seeds",
  description: "No.1 Quality Hybrid Seeds for Farmers",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Something went wrong</h1>
        {/* <Header />
        {children} */}
      </body>
    </html>
  );
}
