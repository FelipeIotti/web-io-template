import { Text } from "@/components/ui/text";
import { ViewInput } from "@/components/view-input";

interface DetailsModalProps<T> {
  title: string;
  entity: T;
}

export function DetailsModal<T>({ title, entity }: DetailsModalProps<T>) {
  return (
    <div className="flex flex-col gap-4">
      <Text type="h1">{title}</Text>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(entity as Record<string, string>).map(
          ([key, value]) => (
            <ViewInput
              key={key}
              label={key}
              content={
                value === undefined || value === null
                  ? null
                  : typeof value === "object"
                  ? JSON.stringify(value)
                  : String(value)
              }
            />
          )
        )}
      </div>
    </div>
  );
}
