export type HttpMethods = 'get' | 'post' | 'put' | 'delete' | 'patch';

export type HttpConfig = {
  url: string;
  method: HttpMethods;
  data?: any;
  headers?: any;
  params?: any;
};
