import { ProfilePicture } from "../profile-picture";

export function ProfileInformation() {
  return (
    <div className="flex gap-2">
      <ProfilePicture
        userSpecific={{
          id: "id1",
          name: "Felipe Iotti",
          email: "felipeizago@hotmail.com",
        }}
      />

      <div className="flex flex-col">
        <p className="text-xs">Felipe Iotti</p>
        <p className="text-xs opacity-60">felipeizago@hotmail.com</p>
      </div>
    </div>
  );
}
