import axios from 'axios';

import { Request } from 'types/api';

axios.defaults.withCredentials = true;

export const createHttpRequest = <T>(request: Request) => {
  const url = combineUrlWithAdditionalInfo(request);

  delete request.params;
  delete request.query;

  const requestConfig = { ...request, url };

  return axios.request<T>(requestConfig);
};

export const combineUrlWithAdditionalInfo = (request: Request) => {
  const { params, query } = request;
  let { url } = request;
  let addition = '';

  if (params) {
    url = replaceUrlParams(url, params);
  }

  if (query) {
    addition += `?${makeQueryString(query)}`;
  }

  return `${url}${addition}`;
};

export const makeQueryString = (query: object) => {
  const result = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return result;
};

export const replaceUrlParams = (url: string, params: string) => {
  let replacedUrl = url;

  Object.entries(params).forEach(([key, value]) => {
    replacedUrl = replacedUrl.replace(`:${key}`, value);
  });

  return replacedUrl;
};
