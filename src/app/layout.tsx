import { cookiesThemeGet } from "@/shared/cookies/theme-cookies";
import { LocaleDTO } from "@/shared/dtos/locale-DTO";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const font = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "io.template",
};
interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: LocaleDTO }>;
}

export default async function Layout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const theme = await cookiesThemeGet();

  return (
    <html lang={locale}>
      <body
        className={`${font.className} ${theme} bg-background transition-all duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
