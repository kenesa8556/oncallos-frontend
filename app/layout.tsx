import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";





export const metadata: Metadata = {
  title: "oncall ",
  description: "a future app to monitor and manage incidents as an oncall team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Nav /> 
        
        {children}
        
      </body>
    </html>
  );
}
