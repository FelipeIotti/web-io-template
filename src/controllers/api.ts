/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/components/toast";
import { cookiesLanguageGet } from "@/shared/cookies/language-cookies";
import { cookiesAuthTokenGet } from "@/shared/cookies/token-cookies";
import { AppError } from "@/shared/utils/app-error";
import ky, { HTTPError, Options } from "ky";
import { redirect } from "next/navigation";

const prefixUrl = process.env.NEXT_PUBLIC_BASE_URL;

const apiClient = ky.create({
  prefixUrl,
  headers: {
    Accept: "application/json",
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        console.log(`[${request.method}]: ${request.url}`);

        const language = await cookiesLanguageGet();
        const authToken = await cookiesAuthTokenGet();

        request.headers.set("Accept-Language", language);
        if (authToken)
          request.headers.set("Authorization", `Bearer ${authToken}`);
      },
    ],
  },
});

async function formatError(error: unknown): Promise<AppError> {
  if (error instanceof HTTPError) {
    let errorData: any;
    try {
      errorData = await error.response?.json();
    } catch {
      errorData = { message: await error.response?.text() };
    }

    const appError = new AppError({
      status: error.response?.status,
      message: errorData?.message || "generic_error_title",
      errors: errorData?.errors,
    });

    console.log("Error====>", appError);

    if (typeof window !== "undefined") {
      toast({ text: appError.message, type: "error" });
    }

    if (typeof window === "undefined" && appError.status === 401) {
      const authToken = await cookiesAuthTokenGet();
      if (authToken) redirect("/api/auth/sign-out");
    }

    return appError;
  }

  return new AppError({
    status: 500,
    message: (error as Error)?.message || "generic_error_title",
  });
}

async function request<T>(
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  options?: (Options & { body?: any }) | undefined,
  responseType: "json" | "blob" = "json"
): Promise<T> {
  try {
    const isFormData = options?.body instanceof FormData;

    const opts =
      method === "get" || method === "delete"
        ? options
        : isFormData
        ? { body: options?.body, ...options }
        : { json: options?.body, ...options };

    const kyMethod = apiClient[method].bind(apiClient) as (
      input: string,
      options?: Options
    ) => ReturnType<typeof apiClient.get>;

    if (responseType === "blob") {
      return (await kyMethod(url, opts).blob()) as T;
    }

    return (await kyMethod(url, opts).json()) as T;
  } catch (err) {
    throw await formatError(err);
  }
}

export const api = {
  get: <T = any>(
    url: string,
    options?: Options,
    responseType?: "json" | "blob"
  ) => request<T>("get", url, options, responseType),
  post: <T = any>(url: string, body?: any, options?: Options) =>
    request<T>("post", url, { ...options, body }),
  put: <T = any>(url: string, body?: any, options?: Options) =>
    request<T>("put", url, { ...options, body }),
  patch: <T = any>(url: string, body?: any, options?: Options) =>
    request<T>("patch", url, { ...options, body }),
  delete: <T = any>(url: string, options?: Options) =>
    request<T>("delete", url, options),
};
