import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

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
      <body className="min-h-full flex flex-col">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
