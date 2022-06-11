import { ListingCategoryOptions, PageFetchOptions, SortOptions } from "./interfaces";
export declare type ArticleState = 'all' | 'fresh' | 'rising';
export declare type CategorizedListingOptions = BaseFetchPageOptions & ListingCategoryOptions;
export declare type EndPoint = `/${string}`;
export declare type NumberResolvable = number | `${number}`;
export declare type Page<T> = T[];
export declare type BaseFetchPageOptions = Partial<Pick<PageFetchOptions, 'perPage' | 'page'>>;
export declare type ListingCategory = 'cfp' | 'forhire' | 'collabs' | 'education' | 'jobs' | 'mentors' | 'products' | 'mentees' | 'forsale' | 'events' | 'misc';
export declare type Tags = string;
export declare type TypeOfArticle = 'article' | 'video_article';
export declare type TypeOfMember = 'user';
export declare type StringIndex<T> = {
    [key: string]: string;
};
export declare type SortedPageOptions = BaseFetchPageOptions & SortOptions;
export declare type VideoDurationFormat = `${number}${number}:${number}${number}` | `${number}${number}:${number}${number}:${number}${number}`;
