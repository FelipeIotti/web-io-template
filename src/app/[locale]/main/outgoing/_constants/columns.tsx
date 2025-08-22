"use client";

import { DetailsModal } from "@/components/details-modal";
import { ColumnConfig } from "@/components/ui/table";
import { DetailsCell } from "@/components/ui/table/special-cells/details-cell";
import { EditDeleteCell } from "@/components/ui/table/special-cells/edit-delete-cell";
import { TextCell } from "@/components/ui/table/special-cells/text-cell";
import { UserDTO } from "@/shared/dtos/users/user-DTO";

export function Columns(): ColumnConfig<UserDTO>[] {
  return [
    {
      key: "1",
      name: "",
      noTranslateColumn: true,
      columnStyle: {
        maxWidth: "5%",
      },
      rowStyle: {
        maxWidth: "5%",
      },
      render: (entity) => (
        <DetailsCell
          modalContent={<DetailsModal title="client" entity={entity} />}
        />
      ),
    },
    {
      key: "name",
      name: "name",
      render: (entity) => <TextCell text={entity.name} />,
    },
    {
      key: "email",
      name: "email",
      render: (entity) => <TextCell text={entity.email} />,
    },
    {
      key: "users_count",
      name: "count",
      render: (entity) => <TextCell text={entity.name} />,
    },
    {
      key: "id",
      name: "",
      noTranslateColumn: true,
      columnStyle: {
        maxWidth: "5%",
      },
      rowStyle: {
        maxWidth: "5%",
      },
      render: (entity) => <EditDeleteCell id={entity.id} onDelete={() => {}} />,
    },
  ];
}
