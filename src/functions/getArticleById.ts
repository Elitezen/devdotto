import { Article } from "../typings/interfaces";
import { NumberResolvable } from "../typings/types";
import _request from "./_request";

/**
 * Fetches an article by it's id.
 * @param {NumberResolvable} id The article's id.
 * @returns {Promise<Article>}
 */
export default async function 
getArticleById(id:NumberResolvable):Promise<Article> {
  const req = await _request<Article>(`/articles/${id}`);
  return req;
}