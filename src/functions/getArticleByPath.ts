import { Article } from "../typings/interfaces";
import _request from "./_request";

/**
 * Fetches an article by it's username/slug path.
 * @param {string} publisherName The name of the user or organization.
 * @param {string} slug The article's slug.
 * @returns {Promise<Article>} The article.
 */
export default async function 
getArticleByPath(publisherName: string, slug:string):Promise<Article> {
  const req = await _request<Article>(`/articles/${publisherName}/${slug}`);
  return req;
}