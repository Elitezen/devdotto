import _request from "../functions/_request";
import { Article, DevToErrorResponse } from "../typings/interfaces";
import { BaseFetchPageOptions } from "../typings/types";

export default class DevToClient {
  protected apiKey: string | null = null;

  /**
   * Assigns an API key to the client for usage.
   * @param {string} key The API key.
   * @returns 
   */
  authorize(key:string) {
    this.apiKey = key;

    return this;
  }

  /**
   * Fetches your articles
   * @param {BaseFetchPageOptions} options 
   * @returns {Promise<Article[]>}
   */
  async getMyArticles(options?:BaseFetchPageOptions):Promise<Article[]> {
    if (this.apiKey === null) throw new TypeError('Your client must be authorized, use DevToClient.authorize(your_api_key)')

    try {
      const req = await _request<Article[]>(`/articles/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.apiKey
        }
      });

      return req as Article[];
    } catch (err) {
      throw new Error((err as DevToErrorResponse).error);
    }
  }
}