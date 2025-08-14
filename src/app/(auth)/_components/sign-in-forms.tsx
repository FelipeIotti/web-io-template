"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormActionState } from "@/hooks/use-form-action-state";

import { toast } from "@/components/toast";
import { signInAction } from "../_actions/sign-in-action";

export function SignInForms() {
  const [{ errors, message, success }, handleSubmit, isPending] =
    useFormActionState(signInAction, () => {
      toast({
        title: "teste",
        description: "teste descrição",
      });
    });

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

      <Button
        className="flex w-full justify-center"
        isLoading={isPending}
        type="button"
        onClick={() =>
          toast({
            title: "teste",
            description: "teste descrição",
          })
        }
      >
        <p>Entrar</p>
      </Button>
    </form>
  );
}
