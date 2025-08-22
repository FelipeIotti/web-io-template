"use client";

import { Table } from "@/components/ui/table";
import { mockDataTable } from "@/shared/constants/mock/mock-data-table";
import { AddButton } from "../_components/add-button";
import { Columns } from "../_constants/columns";

export default function Page() {
  return (
    <div className="flex w-full">
      <Table
        columns={Columns()}
        data={mockDataTable}
        CustomLeftComponents={<AddButton />}
      />
    </div>
  );
}
