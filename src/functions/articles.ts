import { Article, PageFetchOptions } from "../typings/interfaces";
import { BaseFetchPageOptions, NumberResolvable, Page } from "../typings/types";
import DevDotToUtil from "../structures/DevDotToUtil";

const { request, parseParameters } = DevDotToUtil;

/**
 * Fetches an article by it's id.
 * @param {NumberResolvable} id The article's id.
 * @returns {Promise<Article>}
 */
export async function 
getArticleById(id:NumberResolvable):Promise<Article> {
  try {
    const req = await request<Article>(`/articles/${id}`);
    return req;
  } catch(err) {
    throw err;
  }
}

/**
 * Fetches an article by it's username/slug path.
 * @param {string} publisherName The name of the user or organization.
 * @param {string} slug The article's slug.
 * @returns {Promise<Article>} The article.
 */
export async function 
getArticleByPath(publisherName: string, slug:string):Promise<Article> {
  try {
    const req = await request<Article>(`/articles/${publisherName}/${slug}`);
    return req;
  } catch(err) {
    throw err;
  }
}

 /**
 * Fetches a page of articles.
 * @param {Partial<PageFetchOptions>} options Describes the target articles.
 * @returns {Promise<Page>} An array of articles.
 */
export async function 
getArticles(options?:Partial<PageFetchOptions>):Promise<Page> {
  try {
    const query = parseParameters(options);
    const req = request<Page>(`/articles${query}`);
    
    return req;
  } catch(err) {
    throw err;
  }
}

/**
 * Fetches the newest articles.
 * @param {BaseFetchPageOptions} options 
 * @returns {Promise<Page>} An array of articles
 */
export async function getLatestArticles(
  options?: BaseFetchPageOptions
):Promise<Page> {
  try {
    const query = parseParameters(options);
    const req = request<Page>(`/articles/latest${query}`);
    
    return req; 
  } catch(err) {
    throw err;
  }
}