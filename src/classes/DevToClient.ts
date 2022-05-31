import { stringify } from "querystring";
import _camelCaseConvert from "../functions/_camelCaseConvert";
import _request from "../functions/_request";
import { FinalPageFetchOptions, PageFetchOptions, PageScrollerOptions } from "../typings/interfaces";
import { Page, RawPage } from "../typings/types";

export default class DevToClient {
  private readonly links = {
    ARTICLES: 'https://dev.to/api/articles?'
  };

  private readonly options: PageScrollerOptions = {} as PageScrollerOptions;
  public static readonly clientDefaults:PageScrollerOptions = {
    articlesPerPage: 30
  };

  public static readonly fetchDefaults:Pick<PageFetchOptions, 'page'> = {
    page: 1,
  };
  
  constructor(options?:Partial<PageScrollerOptions>) {
    this.options = Object.assign(DevToClient.clientDefaults, options);
  }

  public async fetchPages(options?:Partial<PageFetchOptions>) {
    let fetchOptions = Object.assign(
      Object.assign(DevToClient.fetchDefaults), options
    );

    let { tag, tagsExclude } = fetchOptions;

    if (tag && Array.isArray(tag)) {
      fetchOptions.tag = tag.join(', ');
    }

    if (tagsExclude && Array.isArray(tagsExclude)) {
      fetchOptions.tagsExclude = tagsExclude.join(', ');
    }

    const finalOptions: FinalPageFetchOptions = Object.assign(fetchOptions)
    if (fetchOptions.collectionId) finalOptions.collection_id = fetchOptions.collectionId;
    if (fetchOptions.tagsExclude) finalOptions.tags_exclude = fetchOptions.tagsExclude

    const query = stringify(finalOptions as any) + `&per_page=${this.options.articlesPerPage}`;
    const rawPage = await _request(this.links.ARTICLES + query) as RawPage;
    const page = rawPage.map(obj => _camelCaseConvert(obj)) as Page;
    if (page.length === 0) throw new TypeError("You provided invalid parameters or API had no results.")

    return page;
  }
}