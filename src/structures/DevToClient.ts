import { Article, AuthorizationOptions, DevDotToErrorResponse, NewArticleData, PostOptions, RawNewArticleData, User } from "../typings/interfaces";
import { BaseFetchPageOptions, EndPoint, NumberResolvable } from "../typings/types";
import DevDotToUtil from "./DevDotToUtil";

const { request, snakeCaseKeys } = DevDotToUtil;

/**
 * @class A client for endpoints that require API authentication.
 */
export default class DevToClient {
  #apiKey: string | null = null;
  public me: User | null = null;
 
  /**
   * Assigns an API key to the client for usage. Will also cache your user to DevToClient.me if awaited
   * @param {string} key The API key.
   * @returns 
   */
  async authorize(key:string, options?:AuthorizationOptions) {
    this.#apiKey = key;

    if (options === undefined || options.cacheMe === true) {
      this.me = await this.getMe();
    }

    return this;
  }
  
  protected async authenticatedRequest<T extends object | object[]>(
    path:EndPoint, method: 'GET' | 'POST' | 'PUT', camelCaseParse:boolean = true, body?:string
  ):Promise<T> {
    if (this.#apiKey === null) 
      throw new TypeError('Your client must be authorized, use DevToClient.authorize(your_api_key)');
    
    const reqOptions:PostOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'api-key': this.#apiKey
      }
    }

    if (body) reqOptions.body = body;

    try {
      const req = await request<T>(path, camelCaseParse, reqOptions);
      return req as Promise<T>;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Fetches your articles.
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Article[]>}
   */
  async getMyArticles(options?:BaseFetchPageOptions):Promise<Article[]> {
    try {
      return await this.authenticatedRequest('/articles/me', 'GET', true);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Fetches your published articles.
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Article[]>}
   */
  async getMyPublishedArticles(options?:BaseFetchPageOptions):Promise<Article[]> {
    try {
      return this.authenticatedRequest('/articles/me/published', 'GET', true)
    } catch (err) {
      throw err;
    }
  }

  /**
   * Fetches your unpublished articles.
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Article[]>}
   */
  async getMyUnpublishedArticles(options?:BaseFetchPageOptions):Promise<Article[]> {
    try {
      return await this.authenticatedRequest('/articles/me/unpublished', 'GET', true);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Fetches all of your articles.
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Article[]>}
   */
  async getAllMyArticles(options?:BaseFetchPageOptions):Promise<Article[]> {
    try {
      return this.authenticatedRequest('/articles/me/all', 'GET', true);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new article under your authentication.
   * @param {NewArticleData} data Your new article's data.
   * @returns {Promise<Article>} The newely created article.
   */
  async createArticle(data:NewArticleData):Promise<Article> {
    try {
      const finalData = snakeCaseKeys<RawNewArticleData>(data);
      const body = JSON.stringify({
        article: finalData
      });

      return this.authenticatedRequest('/articles', 'POST', true, body);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates one of your articles by it's id.
   * @param {NumberResolvable} id The articles id.
   * @param {NewArticleData} data The new article.
   * @returns {Promise<Article>} The now edited article.
   */
  async updateArticleById(id:NumberResolvable, data:NewArticleData):Promise<Article> {
    try {
      const finalData = snakeCaseKeys<RawNewArticleData>(data);
      const body = JSON.stringify({
        article: finalData
      });

      return this.authenticatedRequest(`/articles/${id}`, 'POST', true, body);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Fetches the authenticator's user.
   */
  async getMe():Promise<User> {
    try {
      return this.authenticatedRequest('/users/me', 'GET', true);
    } catch (err) {
      throw err;
    }
  }
}