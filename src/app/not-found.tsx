import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "@/i18n/navigation";
import { NextIntlClientProvider } from "next-intl";

export default async function NotFound() {
  return (
    <NextIntlClientProvider>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Text type="h1" className="text-primary text-8xl">
            not_found_title
          </Text>
          <div className="h-0.5 w-10 bg-black/40" />
          <Text>not_found_description</Text>
          <Link href="/main/dashboard">
            <Button className="bg-primary">
              <Text className="font-bold whitespace-nowrap text-white dark:text-black">
                back_to_system
              </Text>
            </Button>
          </Link>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
