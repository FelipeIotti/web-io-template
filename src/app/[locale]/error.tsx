"use client";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useRouter } from "@/i18n/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  useEffect(() => {
    console.log("UX Error =======>", error);
    try {
      const parsed = JSON.parse(error.message);
      if (parsed?.status === 401) {
        router.push("/api/auth/sign-out");
      }
    } catch (e) {
      console.warn("Não foi possível fazer o parse do erro:", e);
    }
  }, [error, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Text type="h1" className="text-primary text-4xl">
          error_title
        </Text>
        <div className="h-0.5 w-10 bg-black/40" />

        <Text className="text-center">error_description</Text>

        <div className="flex gap-3">
          <Button>
            <Text className="text-lg font-bold whitespace-nowrap">back</Text>
          </Button>
          <Button className="bg-primary">
            <Text className="text-lg font-bold whitespace-nowrap text-white dark:text-black">
              try_again
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
