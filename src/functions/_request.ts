import DevDotToUtil from "../structures/DevDotToUtil";
import { Article, DevToErrorResponse, PostOptions, RawArticle } from "../typings/interfaces";
import { EndPoint } from "../typings/types";
const baseLink = 'https://dev.to/api';

export default async function 
_request<T extends object>(path:EndPoint, params?:PostOptions):Promise<T> {
  const defaultParams:RequestInit = {
    method: 'GET'
  };

  const req = await fetch(baseLink + path, params || defaultParams);
  const rawData:object[] | object = await req.json();
  const data = rawData instanceof Array
    ? rawData.map(article => DevDotToUtil.camelCaseKeys(article)) 
    : DevDotToUtil.camelCaseKeys(rawData);
  return data as T;
};