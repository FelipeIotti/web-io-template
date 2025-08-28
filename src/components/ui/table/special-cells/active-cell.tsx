import { Text } from "../../text";

interface ActiveCellProps {
  active: boolean;
}

export function ActiveCell({ active }: ActiveCellProps) {
  return (
    <div className="flex justify-start">
      <div className="flex items-center justify-center gap-2 rounded border px-2 py-1">
        <div
          className={`h-2 w-2 rounded-full ${
            active ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <Text className="text-xs">{active ? "active" : "inactive"}</Text>
      </div>
    </div>
  );
}
