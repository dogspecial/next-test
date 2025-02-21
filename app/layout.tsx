import Navigation from "@/components/navigation";
import type { Metadata } from "next";
// import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
      <Navigation />
        {children}
        </body>
    </html>
  );
}
