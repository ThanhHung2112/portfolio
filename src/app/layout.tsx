import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Thanh Hung — AI Developer",
  description:
    "AI Developer specializing in Machine Learning, NLP, and Data Science. Building intelligent systems and data-driven solutions.",
  keywords: [
    "AI Developer",
    "Machine Learning",
    "Data Science",
    "NLP",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Le Thanh Hung" }],
  openGraph: {
    title: "Le Thanh Hung — AI Developer",
    description:
      "AI Developer specializing in Machine Learning, NLP, and Data Science.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
