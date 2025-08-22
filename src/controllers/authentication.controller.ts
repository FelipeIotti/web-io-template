import { ResponsePromise } from "@/shared/dtos/response-DTO";
import { UserDTO } from "@/shared/dtos/users/user-DTO";
import { api } from "./api";

export const AuthenticationController = {
  login: async (
    email: string,
    password: string
  ): ResponsePromise<{ token: string; user: UserDTO }> => {
    const body = {
      email,
      password,
    };
    const data = await api.post(`authenticate`, body);

    return data;
  },
};
