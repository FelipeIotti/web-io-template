import { Text } from "@/components/ui/text";
import { SignInForms } from "../../_components/sign-in-forms";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Text type="h1">log_in</Text>
      <SignInForms />
    </div>
  );
}
