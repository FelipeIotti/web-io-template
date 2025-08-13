export class AppError {
  status: number;
  message: string;
  errors: Record<string, string> | string;
  error: string;

  constructor(error: {
    status: number;
    message?: string | null;
    errors?: Record<string, string> | string | null;
    error?: string | null;
  }) {
    this.status = error?.status ?? 503;
    this.message = error?.message ?? "";
    this.errors = error?.errors ?? "";
    this.error = error?.error ?? "";
  }

  toJSON() {
    return {
      status: this.status,
      message: this.message,
      errors: this.errors,
      error: this.error,
    };
  }
}
