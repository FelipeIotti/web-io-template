"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useFormActionState } from "@/hooks/use-form-action-state";
import { useRouter } from "@/i18n/navigation";
import { signInAction } from "../_actions/sign-in-action";

export function SignInForms() {
  const router = useRouter();

  const [{ errors }, handleSubmit, isPending] = useFormActionState(
    signInAction,
    () => {
      router.refresh();
    }
  );

  return (
    <form onSubmit={handleSubmit} className="flex min-w-70 flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Input
          name="email"
          label="email"
          placeholder="type_email"
          errors={errors}
        />
        <Input
          name="password"
          label="password"
          placeholder="type_password"
          type="password"
          errors={errors}
        />
      </div>

      <Button className="flex w-full justify-center" isLoading={isPending}>
        <Text>enter</Text>
      </Button>
    </form>
  );
}
