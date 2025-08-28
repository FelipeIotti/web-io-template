export interface UserDTO {
  id: string;
  name: string;
  email: string;
  active: boolean;
  user_type: "admin" | "member" | "associate";
  profile_picture: string | null;
}
