import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CiT Solutions | IT Infrastructure, CCTV & Managed Technology",
  description:
    "CiT Solutions — Professional IT solutions for homes, schools & businesses. Networking, CCTV, Servers, WiFi, and more across South Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}