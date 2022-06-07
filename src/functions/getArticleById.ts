import { Article } from "../typings/interfaces";
import { NumberResolvable } from "../typings/types";
import _request from "./_request";

export default async function 
getArticleById(id:NumberResolvable):Promise<Article> {
  const req = await _request<Article>(`/articles/${id}`);
  return req;
}