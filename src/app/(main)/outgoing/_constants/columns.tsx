"use client";

import { ColumnConfig } from "@/components/ui/table";
import { TextCell } from "@/components/ui/table/special-cells/text-cell";
import { UserDTO } from "@/shared/dtos/users/user-DTO";

export function Columns(): ColumnConfig<UserDTO>[] {
  return [
    {
      key: "name",
      name: "Nome",
      render: (entity) => (
        <TextCell
          text={entity.name}

          // detailsComponent={(show, setShow) => (
          //   <OrganizationDetailsModal
          //     show={show}
          //     setShow={setShow}
          //     data={entity}
          //   />
          // )}
        />
      ),
    },
    {
      key: "areas_count",
      name: "Email",
      render: (entity) => <TextCell text={entity.email} />,
    },
    {
      key: "users_count",
      name: "Nome",
      render: (entity) => <TextCell text={entity.name} />,
    },
  ];
}
