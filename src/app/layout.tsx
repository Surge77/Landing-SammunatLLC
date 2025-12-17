import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "FlowStack | Modern API Observability for Developers",
  description:
    "Debug and monitor your APIs in real-time. FlowStack gives your team complete visibility into API performance, errors, and bottlenecks. Ship faster with confidence.",
  keywords: [
    "API monitoring",
    "API observability",
    "debugging tools",
    "developer tools",
    "performance monitoring",
    "error tracking",
  ],
  openGraph: {
    title: "FlowStack | Modern API Observability for Developers",
    description:
      "Debug and monitor your APIs in real-time. Complete visibility into API performance, errors, and bottlenecks.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowStack | Modern API Observability for Developers",
    description:
      "Debug and monitor your APIs in real-time. Complete visibility into API performance, errors, and bottlenecks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
