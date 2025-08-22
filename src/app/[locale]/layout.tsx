import { Providers } from "@/providers";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Toaster } from "sonner";

interface RootLayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  // const locale = await cookiesLanguageGet();
  // const messages = await getMessages();

  return (
    <NextIntlClientProvider>
      <Toaster duration={4000} />
      <Providers>{children}</Providers>
    </NextIntlClientProvider>
  );
}
