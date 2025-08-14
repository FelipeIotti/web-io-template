import { SignInForms } from "../../_components/sign-in-forms";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1>Log in</h1>
      <SignInForms />
    </div>
  );
}
