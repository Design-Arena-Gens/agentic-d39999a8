import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fjalë nga Ibn Abd al-Barr",
  description:
    "Thënie të zgjedhura të Imam Ibn Abd al-Barr me burime dhe përkthime."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
