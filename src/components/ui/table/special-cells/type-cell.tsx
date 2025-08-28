import { Text } from "../../text";

interface TypeCellProps {
  type: string;
}

export function TypeCell({ type }: TypeCellProps) {
  return (
    <div className="flex justify-start">
      <div className="flex items-center justify-center gap-2 rounded border px-2 py-1">
        <Text className="text-xs" noTranslate>
          {type}
        </Text>
      </div>
    </div>
  );
}
