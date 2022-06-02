import fetchArticle from './src/functions/fetchArticle';
import fetchPage from './src/functions/fetchPage';
import fetchPageLatest from './src/functions/fetchPageLatest';
import fetchVideoArticles from './src/functions/fetchVideoArticles';
import _camelCaseConvert from "./src/functions/_camelCaseConvert";
import _request from "./src/functions/_request";

import { 
  BaseProfile,
  RawArticle, 
  RawBaseProfile, 
  RawFlareTag, 
  RawUser, 
  Article, 
  Organization, 
  FlareTag, 
  FinalPageFetchOptions, 
  PageFetchOptions,
  User 
} from './src/typings/interfaces';

import { 
  ArticleState, 
  BasePageOptions,
  NumberResolvable, 
  RawPage, 
  Page 
} from './src/typings/types'

export {
  fetchArticle,
  fetchPage,
  fetchPageLatest,
  fetchVideoArticles,
  _camelCaseConvert,
  _request,
  BaseProfile, 
  BasePageOptions,
  RawArticle, 
  RawBaseProfile, 
  RawFlareTag, 
  RawUser, 
  Article, 
  Organization, 
  FlareTag, 
  FinalPageFetchOptions,
  PageFetchOptions,   
  User,
  ArticleState,
  NumberResolvable, 
  RawPage,
  Page
}