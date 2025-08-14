"use server";

import z from "zod";

interface InitialStateProps {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | null;
  payload: Record<string, string> | null;
}

const signInSchema = z.object({
  email: z.email({ message: "Coloque um email válido" }),
  password: z.string().min(1, { message: "Coloque uma senha" }),
});

export async function signInAction(data: FormData): Promise<InitialStateProps> {
  const result = signInSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    console.log(result);
    return {
      success: false,
      message: null,
      errors,
      payload: result.data || { email: "", password: "" },
    };
  }

  console.log(result.data);

  return {
    success: true,
    message: "sucesso",
    errors: null,
    payload: null,
  };
}
