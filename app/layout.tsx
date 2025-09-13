import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev-Lab - Innovative Web Solutions",
  description: "Cutting-edge web solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
