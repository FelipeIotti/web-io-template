export interface FormActionDTO {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | any | null;
  data?: any;
}
