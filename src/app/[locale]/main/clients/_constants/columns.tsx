"use client";

import { DetailsModal } from "@/components/details-modal";
import { ColumnConfig } from "@/components/ui/table";
import { ActiveCell } from "@/components/ui/table/special-cells/active-cell";
import { DetailsCell } from "@/components/ui/table/special-cells/details-cell";
import { EditDeleteCell } from "@/components/ui/table/special-cells/edit-delete-cell";
import { TextCell } from "@/components/ui/table/special-cells/text-cell";
import { TypeCell } from "@/components/ui/table/special-cells/type-cell";
import { UserDTO } from "@/shared/dtos/users/user-DTO";

export function Columns(): ColumnConfig<UserDTO>[] {
  return [
    {
      key: "id",
      name: "",
      noTranslateColumn: true,
      render: (entity) => (
        <DetailsCell
          modalContent={<DetailsModal title="client" entity={entity} />}
        />
      ),
    },
    {
      key: "name",
      name: "name",
      render: (entity) => <TextCell text={entity.name} noTranslate />,
    },
    {
      key: "email",
      name: "email",
      render: (entity) => <TextCell text={entity.email} noTranslate />,
    },
    {
      key: "user_type",
      name: "user_type",
      render: (entity) => <TypeCell type={entity.user_type} />,
    },
    {
      key: "active",
      name: "status",
      render: (entity) => <ActiveCell active={entity.active} />,
    },
    {
      key: "id-",
      name: "",
      noTranslateColumn: true,
      render: (entity, index) => (
        <EditDeleteCell id={entity.id} index={index} onDelete={() => {}} />
      ),
    },
  ];
}
