import { Article, AuthorizationOptions, FollowedTags, Follower, NewArticleData, User } from "../typings/interfaces";
import { BaseFetchPageOptions, EndPoint, NumberResolvable, SortedPageOptions } from "../typings/types";
/**
 * @class A client for endpoints that require API authentication.
 */
export default class DEVClient {
    #private;
    me: User | null;
    /**
     * Assigns an API key to the client for usage. Will also cache your user to DEVClient.me if awaited
     * @param {string} key The API key.
     * @returns
     */
    authorize(key: string, options?: AuthorizationOptions): Promise<this>;
    protected authenticatedRequest<T extends object | object[]>(path: EndPoint, method: 'GET' | 'POST' | 'PUT', camelCaseParse?: boolean, body?: string): Promise<T>;
    /**
     * Fetches your articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getMyArticles(options?: BaseFetchPageOptions): Promise<Article[]>;
    /**
     * Fetches your published articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getMyPublishedArticles(options?: BaseFetchPageOptions): Promise<Article[]>;
    /**
     * Fetches your unpublished articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getMyUnpublishedArticles(options?: BaseFetchPageOptions): Promise<Article[]>;
    /**
     * Fetches all of your articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getAllMyArticles(options?: BaseFetchPageOptions): Promise<Article[]>;
    /**
     * Fetches your followed tags.
     * @returns {Promise<FollowedTags[]>}
     */
    getMyFollowedTags(): Promise<FollowedTags[]>;
    /**
     * Fetches your followers.
     * @param {Partial<SortedPageOptions>} options How many to return and how to sort the followers.
     * @returns {Promise<Follower[]>}
     */
    getMyFollowers(options?: Partial<SortedPageOptions>): Promise<Follower[]>;
    /**
     * Creates a new article under your authentication.
     * @param {NewArticleData} data Your new article's data.
     * @returns {Promise<Article>} The newely created article.
     */
    createArticle(data: NewArticleData): Promise<Article>;
    /**
     * Updates one of your articles by it's id.
     * @param {NumberResolvable} id The articles id.
     * @param {NewArticleData} data The new article.
     * @returns {Promise<Article>} The now edited article.
     */
    updateArticleById(id: NumberResolvable, data: NewArticleData): Promise<Article>;
    /**
     * Fetches the authenticator's user.
     */
    getMe(): Promise<User>;
}
