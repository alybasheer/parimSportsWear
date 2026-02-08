import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parim Sportswear | Premium Sportswear Manufacturer from Sialkot",
  description: "Leading sportswear and activewear manufacturer in Sialkot, Pakistan. Custom jerseys, gym wear, and athletic apparel for global retailers. Quality craftsmanship since 2020.",
  keywords: [
    "sportswear manufacturer Sialkot",
    "custom jersey supplier Pakistan",
    "activewear manufacturer",
    "gym wear supplier",
    "bulk sportswear orders",
    "custom sportswear design",
    "athletic apparel manufacturer",
    "Sialkot sportswear",
  ],
  authors: [{ name: "Parim Sportswear" }],
  openGraph: {
    title: "Parim Sportswear | Premium Sportswear Manufacturer",
    description: "Quality sportswear manufacturing from Sialkot. Custom designs, bulk orders, global shipping.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
