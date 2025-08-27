"use client";

import { useRouter } from "@/i18n/navigation";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";

export function BackButton() {
  const router = useRouter();
  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-2 rounded px-2 py-1 transition-all duration-300 hover:bg-black/10"
      onClick={() => router.back()}
    >
      <Icon name="ChevronLeft" className="text-black" size={14} />
      <Text className="text-black">back</Text>
    </div>
  );
}
