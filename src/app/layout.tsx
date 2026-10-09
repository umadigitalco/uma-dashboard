import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UMA Creative OS - Dashboard",
  description: "Multi-brand e-commerce management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
