import { Article, PageFetchOptions } from "./interfaces";

export type ArticleState = 'all' | 'fresh' | 'rising';
export type EndPoint = `/${string}`;
export type NumberResolvable = number | `${number}`;
export type Page = Article[];
export type BaseFetchPageOptions = Partial<Pick<PageFetchOptions, 'perPage' | 'page'>>;
export type Tags = string;
export type TypeOfArticle = 'article';
export type StringIndex<T> = { [key:string]: string }