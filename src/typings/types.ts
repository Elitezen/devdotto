import { Article, PageFetchOptions, RawArticle, User } from "./interfaces";

export type ArticleState = 'FRESH' | 'RISING' | 'ALL';
export type BasePageOptions = Partial<Pick<PageFetchOptions, "page" | "perPage">>;
export type MiniUser = Pick<User, 'name'>;
export type NumberResolvable = number | `${number}`; 
export type RawPage = RawArticle[];
export type Page = Article[];