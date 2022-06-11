import { Article, PageFetchOptions, VideoArticle } from "../typings/interfaces";
import { BaseFetchPageOptions, NumberResolvable, Page } from "../typings/types";
import DevDotToUtil from "../structures/DevDotToUtil";

const { request, parseParameters } = DevDotToUtil;

 /**
 * Fetches a page of articles.
 * @param {Partial<PageFetchOptions>} options Describes the target articles.
 * @returns {Promise<Page>} An array of articles.
 */
  export async function 
  getArticles(options?:Partial<PageFetchOptions>):Promise<Page<Article>> {
    const query = parseParameters(options);
    return await request(`/articles${query}`);
  }

/**
 * Fetches an article by it's id.
 * @param {NumberResolvable} id The article's id.
 * @returns {Promise<Article>}
 */
export async function 
getArticleById(id:NumberResolvable):Promise<Article> {
  return await request(`/articles/${id}`);
}

/**
 * Fetches an article by it's username/slug path.
 * @param {string} publisherName The name of the user or organization.
 * @param {string} slug The article's slug.
 * @returns {Promise<Article>} The article.
 */
export async function 
getArticleByPath(publisherName: string, slug:string):Promise<Article> {
  return await request(`/articles/${publisherName}/${slug}`);
}

/**
 * Fetches the newest articles.
 * @param {BaseFetchPageOptions} options 
 * @returns {Promise<Page<Article>>} An array of articles
 */
export async function getLatestArticles(
  options?: BaseFetchPageOptions
):Promise<Page<Article>> {
  const query = parseParameters(options);
  return request(`/articles/latest${query}`);
}

/**
 * Fetches video articles.
 * @param {BaseFetchPageOptions} options 
 * @returns {Promise<Page<VideoArticle>>} An array of articles
 */
export async function getVideoArticles(
  options?: BaseFetchPageOptions
):Promise<Page<VideoArticle>> {
  const query = parseParameters(options);
  return request(`/videos${query}`);
}