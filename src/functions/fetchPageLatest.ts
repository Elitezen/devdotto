import { stringify } from "querystring";
import { FinalPageFetchOptions, PageFetchOptions } from "../typings/interfaces";
import { BasePageOptions, Page, RawPage } from "../typings/types";
import _camelCaseConvert from "./_camelCaseConvert";
import _request from "./_request";

export default async function fetchPageLatest(options?:BasePageOptions) {
  const link = 'https://dev.to/api/articles/latest?';
  let finalOptions: Partial<Pick<FinalPageFetchOptions, "page" | "per_page">> = {};
  if (options?.perPage) finalOptions.per_page = options.perPage;
  const query = stringify(finalOptions);
  const rawPage = await _request(link + query) as RawPage;
  const page = rawPage.map(obj => _camelCaseConvert(obj)) as Page;
  if (page.length === 0) throw new TypeError("You provided invalid parameters or API had no results.")

  return page;
}

fetchPageLatest()