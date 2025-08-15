"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  useEffect(() => {
    console.log("UX Error =======>", error);
    try {
      const parsed = JSON.parse(error.message);
      if (parsed?.status === 401) {
        router.push("/api/auth/sign-out");
      }
    } catch (e) {
      console.warn("Não foi possível fazer o parse do erro:", e);
    }
  }, [error, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-primary text-4xl">Erro encontrado!</h1>
        <div className="h-0.5 w-10 bg-black/40" />

        <p>
          Houve um erro no servidor interno, estamos trabalhando para corrigir.
        </p>

        <div className="flex gap-3">
          <Button>
            <p className="text-lg font-bold ">Voltar</p>
          </Button>
          <Button className="bg-primary">
            <p className="text-lg font-bold text-white dark:text-black">
              Tentar novamente
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
