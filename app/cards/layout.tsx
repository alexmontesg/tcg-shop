export default function CardsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" className="max-w-5xl mx-auto px-4">
      {children}
    </main>
  );
}
