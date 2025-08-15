import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-primary text-8xl">404</h1>
        <div className="h-0.5 w-10 bg-black/40" />
        <p>Página não encontrada</p>

        <Link href="/dashboard">
          <Button className="bg-primary">
            <p className="text-lg font-bold text-white dark:text-black">
              Voltar para o sitema
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
