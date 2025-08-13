import { FormActionDTO } from "@/shared/dtos/form-action-DTO";
import { FormEvent, useState, useTransition } from "react";

export function useFormState(
  action: (data: FormData, defaultValues?: any) => Promise<FormActionDTO>,
  onSubmit?: (
    data?: any,
    message?: string | null,
    success?: boolean,
    errors?: Record<string, string[]>
  ) => Promise<void> | void,
  defaultValues?: any,
  initialState?: FormActionDTO
) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<FormActionDTO>(
    initialState ?? { success: false, message: null, errors: null, data: {} }
  );

  function updateFormStateData(name: string, value: string) {
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data, defaultValues);

      if (onSubmit) {
        await onSubmit(state.data, state.message, state.success, state.errors);
        if (state.success) {
          form.reset();
          setFormState((prev) => ({
            ...prev,
            data: {},
            //data: defaultValues ?? {},
          }));
        }
      }

      setFormState(state);
    });
  }

  return [formState, handleSubmit, isPending, updateFormStateData] as const;
}
