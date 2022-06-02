import { Article } from "../typings/interfaces";
import { NumberResolvable } from "../typings/types";
import _camelCaseConvert from "./_camelCaseConvert";
import _request from "./_request";

export default async function fetchArticle(id:NumberResolvable) {
  const link = `https://dev.to/api/articles/${id}`;

  const rawArticle = await _request(link);
  const article = _camelCaseConvert(rawArticle) as Article;
  return article;
}