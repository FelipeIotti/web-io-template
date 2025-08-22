export class AppError {
  status: number;
  message: string;
  errors: Record<string, string[]> | null;

  constructor(error: {
    status: number;
    message?: string | null;
    errors?: Record<string, string[]> | null;
  }) {
    this.status = error?.status ?? 503;
    this.message = error?.message ?? "";
    this.errors = error?.errors ?? null;
  }

  toJSON() {
    return {
      status: this.status,
      message: this.message,
      errors: this.errors,
    };
  }
}
