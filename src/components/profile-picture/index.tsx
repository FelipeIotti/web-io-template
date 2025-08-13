"use client";
import { useAuth } from "@/hooks/use-auth";
import { UserDTO } from "@/shared/dtos/users/user-DTO";

interface ProfilePictureProps {
  userSpecific?: UserDTO;
}
export function ProfilePicture({ userSpecific }: ProfilePictureProps) {
  const { user } = useAuth();

  function getInitials(name: string) {
    const words = name.trim().split(" ");
    const firstLetter = words[0][0];
    const lastLetter = words[words.length - 1][0];
    return (firstLetter + lastLetter).toUpperCase();
  }

  const userProfile = userSpecific ?? user;

  return (
    <div className="bg-primary/20 flex items-center justify-center overflow-hidden rounded px-2.5 py-1.5">
      <p className="text-primary text-sm">
        {userProfile.name && getInitials(userProfile.name)}
      </p>
    </div>
  );
}
