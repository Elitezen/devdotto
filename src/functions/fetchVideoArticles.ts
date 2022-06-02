import { stringify } from "querystring";
import { FinalPageFetchOptions, RawVideoArticle, VideoArticle } from "../typings/interfaces";
import { BasePageOptions, Page, RawPage } from "../typings/types";
import _camelCaseConvert from "./_camelCaseConvert";
import _request from "./_request";

export default async function fetchVideoArticles(options?:BasePageOptions) {
  const link = 'https://dev.to/api/videos?';
  let finalOptions: Partial<Pick<FinalPageFetchOptions, "page" | "per_page">> = {};
  if (options?.perPage) finalOptions.per_page = options.perPage;
  const query = stringify(finalOptions);
  const rawPage = await _request(link + query) as RawVideoArticle[];
  const page = rawPage.map(obj => _camelCaseConvert(obj)) as VideoArticle[];
  if (page.length === 0) throw new TypeError("You provided invalid parameters or API had no results.")

  return page;
}