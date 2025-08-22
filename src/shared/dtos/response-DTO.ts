export type ResponsePromise<T> = Promise<{
  message: string;
  data: T;
}>;
