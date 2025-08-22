import z from "zod";

export const signInSchema = z.object({
  email: z.email({ message: "invalid_email" }),
  password: z.string().min(1, { message: "required_field" }),
});
