import { Label } from "../ui/label";
import { Text } from "../ui/text";

interface ViewInputProps {
  label: string;
  content?: string | null;
}

export function ViewInput({ label, content }: ViewInputProps) {
  return (
    content &&
    label !== "id" && (
      <div className="space-y-0.5">
        <Label text={label} />
        <div className="input dark:hover:border-input rounded hover:border">
          <Text noTranslate>{content}</Text>
        </div>
      </div>
    )
  );
}
