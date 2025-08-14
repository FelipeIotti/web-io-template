import { Providers } from "@/providers";
import { cookiesThemeGet } from "@/shared/cookies/theme-cookies";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const font = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "io.template",
};
interface RootLayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  const theme = await cookiesThemeGet();

  return (
    <html>
      <body
        className={`${font.className} ${theme} bg-background transition-all duration-200`}
      >
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
