import { Article, PageFetchOptions, VideoArticle } from "../typings/interfaces";
import { BaseFetchPageOptions, NumberResolvable, Page } from "../typings/types";
/**
* Fetches a page of articles.
* @param {Partial<PageFetchOptions>} options Describes the target articles.
* @returns {Promise<Page>} An array of articles.
*/
export declare function getArticles(options?: Partial<PageFetchOptions>): Promise<Page<Article>>;
/**
 * Fetches an article by it's id.
 * @param {NumberResolvable} id The article's id.
 * @returns {Promise<Article>}
 */
export declare function getArticleById(id: NumberResolvable): Promise<Article>;
/**
 * Fetches an article by it's username/slug path.
 * @param {string} publisherName The name of the user or organization.
 * @param {string} slug The article's slug.
 * @returns {Promise<Article>} The article.
 */
export declare function getArticleByPath(publisherName: string, slug: string): Promise<Article>;
/**
 * Fetches the newest articles.
 * @param {BaseFetchPageOptions} options
 * @returns {Promise<Page<Article>>} An array of articles
 */
export declare function getLatestArticles(options?: BaseFetchPageOptions): Promise<Page<Article>>;
/**
 * Fetches video articles.
 * @param {BaseFetchPageOptions} options
 * @returns {Promise<Page<VideoArticle>>} An array of articles
 */
export declare function getVideoArticles(options?: BaseFetchPageOptions): Promise<Page<VideoArticle>>;
