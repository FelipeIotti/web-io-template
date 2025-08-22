"use client";

import { CardTotalizer } from "@/components/card-totalizer";
import { Table } from "@/components/ui/table";
import { mockDataTable } from "@/shared/constants/mock/mock-data-table";
import { mockDataTotalizers } from "@/shared/constants/mock/mock-data-totalizers";
import { AddButton } from "../_components/add-button";
import { Columns } from "../_constants/columns";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8">
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
      <Table
        columns={Columns()}
        data={mockDataTable}
        CustomLeftComponents={<AddButton />}
      />
    </div>
  );
}
