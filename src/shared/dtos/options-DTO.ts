import { ReactNode } from "react";

export interface OptionsDTO {
  label: string | ReactNode;
  value: string | number | boolean;
}
