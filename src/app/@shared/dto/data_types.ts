export interface ToastData {
  message: string;
  status: string;
}

export enum Status {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
}
