"use client";
import { useAuth } from "@/hooks/use-auth";
import { ProfilePicture } from "../profile-picture";
import { Text } from "../ui/text";

export function ProfileInformation() {
  const { user } = useAuth();

  return (
    <div className="flex w-full gap-2">
      <ProfilePicture />

      <div className="flex w-full flex-col">
        <Text className="text-xs" noTranslate>
          {user.name}
        </Text>
        <Text className="truncate text-xs opacity-60" noTranslate noTooltip>
          {user.email}
        </Text>
      </div>
    </div>
  );
}
