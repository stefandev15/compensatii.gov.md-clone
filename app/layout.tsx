import "./globals.css";
import { onest } from "@/fonts/fonts";
import { Footer, Header } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`bg-white font-normal text-[#1e1e23] ${onest.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
