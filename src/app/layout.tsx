import { Providers } from "@/providers";
import { cookiesThemeGet } from "@/shared/cookies/theme-cookies";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
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
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          closeButton={false}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          pauseOnHover={true}
          theme="colored"
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
