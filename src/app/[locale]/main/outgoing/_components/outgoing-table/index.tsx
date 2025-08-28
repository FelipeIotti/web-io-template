"use client";

import { Table } from "@/components/ui/table";
import { mockDataTable } from "@/shared/constants/mock/mock-data-table";
import { UserDTO } from "@/shared/dtos/users/user-DTO";
import { Columns } from "../../_constants/columns";
import { AddButton } from "../add-button";

export function OutgoingTable() {
  return (
    <Table
      columns={Columns()}
      data={mockDataTable as UserDTO[]}
      CustomLeftComponents={<AddButton />}
    />
  );
}
