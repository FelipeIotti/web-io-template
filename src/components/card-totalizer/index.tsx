import { useTranslations } from "next-intl";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";

interface CardTotalizerProps {
  title: string;
  percentage: number;
  value: number;
  type: "income" | "outcome";
}

export function CardTotalizer({
  title,
  percentage,
  type,
  value,
}: CardTotalizerProps) {
  const t = useTranslations();

  return (
    <div className="flex rounded border bg-gradient-to-t from-white to-black/5 shadow">
      <div className="flex w-full flex-col gap-2 p-4 ">
        <div className="flex items-center justify-between ">
          <Text className="opacity-40" noTranslate>
            {title}
          </Text>
          <div className="flex items-center gap-2 rounded border px-2 py-1">
            <Icon
              name={type === "income" ? "ArrowUpRight" : "ArrowDownRight"}
              size={12}
              className="fill-text"
            />
            <Text className="text-xs" noTranslate>
              {type === "income" ? "+" : "-"}
              {percentage}%
            </Text>
          </div>
        </div>
        <h1>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
        <Text className="opacity-40" noTranslate>
          {" "}
          {type === "income" ? "+" : "-"}
          {percentage}% {t("trending_up_description")}
        </Text>
      </div>
    </div>
  );
}
