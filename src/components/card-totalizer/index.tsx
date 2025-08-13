import { Icon } from "../ui/icon";

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
  return (
    <div className="flex rounded border bg-gradient-to-t from-white to-black/5 shadow">
      <div className="flex w-full flex-col gap-2 p-4 ">
        <div className="flex items-center justify-between ">
          <p className="opacity-40">{title}</p>
          <div className="flex items-center gap-2 rounded border px-2 py-1">
            <Icon
              name={type === "income" ? "ArrowUpRight" : "ArrowDownRight"}
              size={12}
              className="fill-text"
            />
            <p className="text-xs">
              {type === "income" ? "+" : "-"}
              {percentage}%
            </p>
          </div>
        </div>
        <h1>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
        <p className="opacity-40">
          {" "}
          {type === "income" ? "+" : "-"}
          {percentage}% Trending up this month
        </p>
      </div>
    </div>
  );
}
