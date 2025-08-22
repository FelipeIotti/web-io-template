"use client";

import { toast } from "@/components/toast";
import { FormEvent, useState, useTransition } from "react";

interface FormState<T> {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | null;
  data?: T | null;
}

export function useFormActionState<T>(
  action: (data: FormData) => Promise<FormState<T>>,
  onSubmit?: (data?: T | null, success?: boolean) => Promise<void> | void,
  initialState?: FormState<T>
) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState(
    initialState ?? { success: false, message: null, errors: null, data: null }
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);

      if (onSubmit) {
        await onSubmit(state?.data, state.success);
        if (state.message) {
          toast({
            text: state?.message,
            type: state.success ? "success" : "error",
          });
        }
        if (state.success) form.reset();
      }

      setFormState(state);
    });
  }

  return [formState, handleSubmit, isPending] as const;
}
