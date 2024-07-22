import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const defaultFontFamily = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Remote Classes",
  description: "Its class time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFontFamily.className}>{children}</body>
    </html>
  );
}
