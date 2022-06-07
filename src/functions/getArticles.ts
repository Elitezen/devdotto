import { URLSearchParams } from 'url';
import DevDotToUtil from '../structures/DevDotToUtil';
import { FinalPageFetchOptions, PageFetchOptions } from '../typings/interfaces';
import { Page, StringIndex } from '../typings/types';
import _parseParameters from './_parseParameters';
import _request from './_request';

/**
 * Fetches a page of articles.
 * @param {Partial<PageFetchOptions>} options Describes the target articles.
 * @returns {Promise<Page>} An array of articles.
 */
export default async function 
getArticles(options?:Partial<PageFetchOptions>):Promise<Page> {
  const query = _parseParameters(options);
  const req = _request<Page>(`/articles${query}`);
  
  return req;
}