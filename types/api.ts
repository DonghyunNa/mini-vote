import { Method, AxiosRequestConfig } from 'axios';

type Api = { method: Method; url: string };
export type Apis = { [api: string]: Api };

export type Request = AxiosRequestConfig & {
  param?: string;
  query?: object;
  url: string;
};
