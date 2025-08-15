"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormActionState } from "@/hooks/use-form-action-state";

import { useRouter } from "next/navigation";
import { signInAction } from "../_actions/sign-in-action";

export function SignInForms() {
  const router = useRouter();

  const [{ errors }, handleSubmit, isPending] = useFormActionState(
    signInAction,
    () => {
      router.push("/dashboard");
    }
  );

  return (
    <form onSubmit={handleSubmit} className="flex min-w-70 flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Input
          name="email"
          label="E-mail"
          placeholder="Digite o seu email"
          errors={errors}
        />
        <Input
          name="password"
          label="Senha"
          placeholder="Digite o sua senha"
          type="password"
          errors={errors}
        />
      </div>

      <Button className="flex w-full justify-center" isLoading={isPending}>
        <p>Entrar</p>
      </Button>
    </form>
  );
}
