import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin — Jannat Al Adday",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-screen bg-paper font-[ui-sans-serif,system-ui,sans-serif] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
