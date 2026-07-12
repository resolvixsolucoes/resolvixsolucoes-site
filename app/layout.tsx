import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resolvix Soluções",
  description: "Sites, sistemas web e automações sob medida em Ipatinga-MG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
