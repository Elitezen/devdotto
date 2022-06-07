import { Article } from "../typings/interfaces";
import _request from "./_request";

export default async function 
getArticleByPath(publisherName: string, slug:string):Promise<Article> {
  const req = await _request<Article>(`/articles/${publisherName}/${slug}`);
  return req;
}