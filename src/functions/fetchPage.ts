import { stringify } from "querystring";
import { FinalPageFetchOptions, PageFetchOptions } from "../typings/interfaces";
import { Page, RawPage } from "../typings/types";
import _camelCaseConvert from "./_camelCaseConvert";
import _request from "./_request";

export default async function fetchPage(options?:Partial<PageFetchOptions>) {
  const link = 'https://dev.to/api/articles?';
  const defaultOptions:Pick<PageFetchOptions, 'page'> = {
    page: 1,
  };

  let fetchOptions = Object.assign(Object.assign(defaultOptions), options);

  let { tag, tagsExclude } = fetchOptions;

  if (tag && Array.isArray(tag)) {
    fetchOptions.tag = tag.join(', ');
  }

  if (tagsExclude && Array.isArray(tagsExclude)) {
    fetchOptions.tagsExclude = tagsExclude.join(', ');
  }

  const finalOptions: FinalPageFetchOptions = Object.assign(fetchOptions)
  if (fetchOptions.perPage) finalOptions.per_page = fetchOptions.perPage;
  if (fetchOptions.collectionId) finalOptions.collection_id = fetchOptions.collectionId;
  if (fetchOptions.tagsExclude) finalOptions.tags_exclude = fetchOptions.tagsExclude

  const query = stringify(finalOptions as any);
  const rawPage = await _request(link + query) as RawPage;
  const page = rawPage.map(obj => _camelCaseConvert(obj)) as Page;
  if (page.length === 0) throw new TypeError("You provided invalid parameters or API had no results.")

  return page;
}