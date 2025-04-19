import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LKereceni Portfolio",
  description: "Generated with passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} font-mono antialiased dark flex flex-col min-h-screen`} // * For multi-fonts add object.variable next to firaCode.variable
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
