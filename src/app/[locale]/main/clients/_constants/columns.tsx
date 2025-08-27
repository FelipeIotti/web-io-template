"use client";

import { ColumnConfig } from "@/components/ui/table";
import { TextCell } from "@/components/ui/table/special-cells/text-cell";
import { UserDTO } from "@/shared/dtos/users/user-DTO";

export function Columns(): ColumnConfig<UserDTO>[] {
  return [
    {
      key: "name",
      name: "name",
      render: (entity) => <TextCell text={entity.name} noTranslate />,
    },
    {
      key: "areas_count",
      name: "email",
      render: (entity) => <TextCell text={entity.email} noTranslate />,
    },
    {
      key: "id",
      name: "count",
      render: (entity) => <TextCell text={entity.name} noTranslate />,
    },
    {
      key: "email3",
      name: "trending_up_description",
      render: (entity) => <TextCell text={entity.email2} noTranslate />,
    },
    {
      key: "email3",
      name: "trending_up_description",
      render: (entity) => <TextCell text={entity.email2} noTranslate />,
    },
  ];
}
