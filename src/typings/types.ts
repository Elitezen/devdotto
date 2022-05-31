import { Article, RawArticle } from "./interfaces";

export type ArticleState = 'FRESH' | 'RISING' | 'ALL';
export type NumberResolvable = number | `${number}`; 
export type RawPage = RawArticle[];
export type Page = Article[];