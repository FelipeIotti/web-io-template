import { Text } from "@/components/ui/text";

interface LabelProps {
  text?: string;
}

export function Label({ text }: LabelProps) {
  return text && <Text className="pl-1 text-xs font-bold">{text}</Text>;
}
