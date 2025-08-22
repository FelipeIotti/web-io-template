"use server";

import { AuthenticationController } from "@/controllers/authentication.controller";
import { cookiesAuthTokenSave } from "@/shared/cookies/token-cookies";
import { cookiesUserSave } from "@/shared/cookies/user-cookies";
import { AppError } from "@/shared/utils/app-error";
import { signInSchema } from "../_schemas/sign-in.schema";

export async function signInAction(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return {
      success: false,
      message: null,
      errors,
    };
  }

  try {
    const { data } = await AuthenticationController.login(
      result.data.email,
      result.data.password
    );

    await cookiesUserSave(data.user);
    await cookiesAuthTokenSave(data.token);

    return {
      success: true,
      message: null,
      errors: null,
      data,
    };
  } catch (error) {
    let message = "generic_error_title";
    let errors = null;

    if (error instanceof AppError) {
      message = error.message;
      errors = error.errors;
    }

    return { success: false, message, errors };
  }
}
