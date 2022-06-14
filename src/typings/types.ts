import { ListingCategoryOptions, PageFetchOptions, SortOptions } from "./interfaces";

export type ArticleState = 'all' | 'fresh' | 'rising';
export type CategorizedListingOptions = BaseFetchPageOptions & ListingCategoryOptions;
export type EndPoint = `/${string}`;
export type NumberResolvable = number | `${number}`;
export type Page<T> = T[];
export type BaseFetchPageOptions = Partial<Pick<PageFetchOptions, 'perPage' | 'page'>>;
export type ListingAction = 'bump' | 'publish' | 'unpublish';
export type ListingCategory = 'cfp' | 'forhire' | 'collabs' | 'education' | 'jobs' | 'mentors' | 'products' | 'mentees' | 'forsale' | 'events' | 'misc';
export type Tags = string;
export type TypeOfArticle = 'article' | 'video_article';
export type TypeOfMember = 'user';
export type ReadingListItemStatus = 'valid' | 'invalid' | 'confirmed' | 'archived';
export type StringIndex<T> = { [key:string]: string };
export type SortedPageOptions = BaseFetchPageOptions & SortOptions;
export type VideoDurationFormat = 
  `${number}${number}:${number}${number}` | 
  `${number}${number}:${number}${number}:${number}${number}`;