import { Article, AuthorizationOptions, DEVErrorResponse, FollowedTags, Follower, Listing, NewArticleData, NewListingData, PostOptions, RawNewArticleData, RawNewListingData, User } from "../typings/interfaces";
import { BaseFetchPageOptions, EndPoint, ListingAction, NumberResolvable, Page, SortedPageOptions } from "../typings/types";
import DEVUtil from "./DEVUtil";

const { request, snakeCaseKeys, parseParameters } = DEVUtil;

/**
 * @class A client for endpoints that require API authentication.
 */
export default class DEVClient {
  #apiKey: string | null = null;
  public me: User | null = null;
 
  /**
   * Assigns an API key to the client for usage. Will also cache your user to DEVClient.me if awaited
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
      throw new TypeError('Your client must be authorized, use DEVClient.authorize(your_api_key)');
    
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
   * @returns {Promise<Page<Article>>}
   */
  async getMyArticles(options?:BaseFetchPageOptions):Promise<Page<Article>> {
    const query = parseParameters(options);
    return await this.authenticatedRequest(`/articles/me${query}`, 'GET', true);
  }

  /**
   * Fetches your listing by id.
   * @param {NumberResolvable} id 
   * @returns 
   */
  async getMyListingById(id:NumberResolvable):Promise<Listing> {
    return await this.authenticatedRequest(`/listings/${id}`, 'GET', true);
  }

  /**
   * Fetches your published articles.
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Page<Article>>}
   */
  async getMyPublishedArticles(options?:BaseFetchPageOptions):Promise<Page<Article>> {
    const query = parseParameters(options);
    return await this.authenticatedRequest(`/articles/me/published${query}`, 'GET', true);
  }

  /**
   * Fetches your unpublished articles.
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Article[]>}
   */
  async getMyUnpublishedArticles(options?:BaseFetchPageOptions):Promise<Article[]> {
    const query = parseParameters(options);
    return await this.authenticatedRequest(`/articles/me/unpublished${query}`, 'GET', true);
  }

  /**
   * Fetches all of your articles.
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Page<Article>>}
   */
  async getAllMyArticles(options?:BaseFetchPageOptions):Promise<Page<Article>> {
    const query = parseParameters(options);
    return await this.authenticatedRequest(`/articles/me/all${query}`, 'GET', true);
  }

  /**
   * Fetches your followed tags.
   * @returns {Promise<FollowedTags[]>}
   */
  async getMyFollowedTags():Promise<FollowedTags[]> {
    return await this.authenticatedRequest('/follows/tags', 'GET', true);
  }

  /**
   * Fetches your followers.
   * @param {Partial<SortedPageOptions>} options How many to return and how to sort the followers.
   * @returns {Promise<Page<Article>>}
   */
  async getMyFollowers(options?:Partial<SortedPageOptions>):Promise<Page<Article>> {
    const query = parseParameters(options);
    return await this.authenticatedRequest(`/followers/users${query}`, 'GET', true);
  }

  /**
   * Creates a new article under your authentication.
   * @param {NewArticleData} data Your new article's data.
   * @returns {Promise<Article>} The newely created article.
   */
  async createArticle(data:NewArticleData):Promise<Article> {
    const finalData = snakeCaseKeys<RawNewArticleData>(data);
    const body = JSON.stringify({
      article: finalData
    });

    return await this.authenticatedRequest('/articles', 'POST', true, body);
  }

  /**
   * Updates one of your articles by it's id.
   * @param {NumberResolvable} id The articles id.
   * @param {NewArticleData} data The new article.
   * @returns {Promise<Article>} The now edited article.
   */
  async updateArticleById(id:NumberResolvable, data:NewArticleData):Promise<Article> {
    const finalData = snakeCaseKeys<RawNewArticleData>(data);
    const body = JSON.stringify({
      article: finalData
    });

    return await this.authenticatedRequest(`/articles/${id}`, 'POST', true, body);
  }

  /**
   * Updates your listing by id.
   * @warning Function is untested due to payment restrictions. Report issues at https://github.com/Elitezen/devdotto/issues
   * @param {NumberResolvable} id The listing's id.
   * @param {Partial<NewListingData>} data The new listing.
   * @param {ListingAction} action How to update this listing.
   * @returns {Promise<Listing>} The new listing.
   */
  async updateListingById(
    id:NumberResolvable, data:Partial<NewListingData>, action?:ListingAction
  ):Promise<Listing> {
    let finalData:RawNewListingData & { action?:ListingAction } = snakeCaseKeys<RawNewListingData>(data);
    if (action) finalData['action'] = action;

    const body = JSON.stringify({
      listing: finalData
    });

    return await this.authenticatedRequest(`/listings/${id}`, 'PUT', true, body);
  }

  /**
   * Fetches the authenticator's user.
   */
  async getMe():Promise<User> {
    return await this.authenticatedRequest('/users/me', 'GET', true);
  }
}