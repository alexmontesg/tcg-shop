import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next TCG Shop",
  description: "Training project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-5xl mx-auto px-4">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
