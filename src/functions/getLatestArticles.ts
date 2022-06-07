import { BaseFetchPageOptions, Page } from "../typings/types";
import _parseParameters from "./_parseParameters";
import _request from "./_request";

/**
 * Fetches the newest articles.
 * @param {BaseFetchPageOptions} options 
 * @returns {Promise<Page>} An array of articles
 */
export default async function getLatestArticles(
  options?: BaseFetchPageOptions
):Promise<Page> {
  const query = _parseParameters(options);
  const req = _request<Page>(`/articles/latest${query}`);
  
  return req; 
}