import { Article, RawArticle } from "./interfaces";
export declare type ArticleState = 'FRESH' | 'RISING' | 'ALL';
export declare type NumberResolvable = number | `${number}`;
export declare type RawPage = RawArticle[];
export declare type Page = Article[];
