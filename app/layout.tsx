import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA — Make your next move",
  description: "One calm workspace for your team's biggest ideas.",
  keywords: ["SaaS", "team workspace", "productivity", "analytics"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
