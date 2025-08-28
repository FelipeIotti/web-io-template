import { CardTotalizer } from "@/components/card-totalizer";
import { mockDataTotalizers } from "@/shared/constants/mock/mock-data-totalizers";
import { OutgoingTable } from "../_components/outgoing-table";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {mockDataTotalizers.map(({ title, value, percentage, type }, index) => (
          <CardTotalizer
            key={index}
            title={title}
            value={value}
            percentage={percentage}
            type={type as "income" | "outcome"}
          />
        ))}
      </div>

      <OutgoingTable />
    </div>
  );
}
