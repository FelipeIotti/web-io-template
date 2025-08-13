import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1>Log in</h1>
      <form className="flex min-w-70 flex-col gap-8" action="">
        <div className="flex flex-col gap-4">
          <Input name="email" label="E-mail" placeholder="Digite o seu email" />
          <Input
            name="password"
            label="Senha"
            placeholder="Digite o sua senha"
          />
        </div>
        <Link href="/dashboard" className="flex w-full">
          <Button className="flex w-full justify-center" type="button">
            <p>Entrar</p>
          </Button>
        </Link>
      </form>
    </div>
  );
}
