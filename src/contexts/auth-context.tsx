"use client";

import { useRouter } from "@/i18n/navigation";
import { cookiesAuthTokenRemove } from "@/shared/cookies/token-cookies";
import {
  cookiesUserGet,
  cookiesUserRemove,
  cookiesUserSave,
} from "@/shared/cookies/user-cookies";
import { UserDTO } from "@/shared/dtos/users/user-DTO";
import { createContext, ReactNode, useEffect, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  updateUser: (user: UserDTO) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter();

  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function updateUser(userData: UserDTO) {
    await cookiesUserSave(userData);

    setUser(userData);
  }

  async function loadUserData() {
    const userLogged = await cookiesUserGet();

    if (userLogged) {
      setUser(userLogged);
    }
  }

  async function signOut() {
    //if (user.id) await UsersController.logout();

    await cookiesAuthTokenRemove();
    await cookiesUserRemove();
    router.push("/");
    setUser({} as UserDTO);
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
