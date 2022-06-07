# DevDotTo
This project is a NodeJS wrapper for the Dev.to API: https://developers.forem.com/api and is currently in alpha-stage. Consider contributing functions for various endpoints or typings for API result data. View the link for the documentation this wrapper is being based off. It is not recommended to use this wrapper for production just yet.

Consider contributing or opening issues: https://github.com/Elitezen/devdotto

--- 

# Changelog (0.2.0)

# 0.2.1
Refactor and renaming of functions and typings, created client class for functions
that require authorization. Added minimal JSDocs. Switched from node-fetch to the built-in fetch API (Node 18.3.0)

The current functions are now as follows:
- getArticleById()
- getArticleByPath()
- getArticles()
- getLatestArticles()
- DevToClient
  - .authorize()
  - .getMyArticles()
---

Requires Latest version of NodeJS

## Typings Dump

### Interfaces
```ts
interface BasePageFetchOptions {
  page: NumberResolvable;
  tag: Tags;
  tags: Tags[];
  username: string;
  state: ArticleState;
  top: NumberResolvable;
}

interface DevToErrorResponse {
  error: string;
  status: number;
}

interface PageFetchOptions extends BasePageFetchOptions {
  perPage: NumberResolvable;
  tagsExclude: Tags[];
  collectionId: NumberResolvable;
}

interface FinalPageFetchOptions extends BasePageFetchOptions {
  per_page: number;
  tags_exclude: string;
  collection_id: number;
}

interface BaseArticle {
  id: number;
  title: number;
  description: string;
  tags: Tags[];
  slug: string;
  path: string;
  url: string;
}

interface Article extends BaseArticle {
  typeOf: TypeOfArticle;
  coverImage: string | null;
  readablePublishDate: string;
  socialImage: string;
  tagList: string;
  canonicalUrl: string;
  commentsCount: number;
  positiveReactionsCount: number;
  publicReactionsCount: number;
  createdAt: string;
  editedAt: string | null;
  crosspostedAt: string | null;
  publishedAt: string;
  lastCommentAt: string;
  publishedTimestamp: string;
  bodyHtml?: string;
  bodyMarkdown?: string;
  readingTimeMinutes: number;
  user: User;
  organization: Organization;
  flareTag: FlareTag;
}

interface RawArticle extends BaseArticle {
  type_of: TypeOfArticle;
  cover_image: string | null;
  readable_publish_date: string;
  social_image: string;
  tag_list: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  published_timestamp: string;
  body_html: string;
  reading_time_minutes: number;
  user: RawUser;
  organization: RawOrganization;
  flare_tag: RawFlareTag;
}

interface BaseOrganization {
  name: string;
  username: string;
  slug: string;
}

interface Organization extends BaseOrganization {
  profileImage: string;
  profileImage90: string;
}

interface RawOrganization extends BaseOrganization {
  profile_image: string;
  profile_image_90: string;
}

interface BaseUser {
  name: string;
  username: string;
}

interface PostOptions {
  method: 'GET' | 'POST' | 'PUT';
  headers: {
    'Content-Type'?: 'application/json' | string,
    'api-key': string
  },
  body?: string;
}

interface User extends BaseUser {
  twitterUsername: string | null;
  githubUsername: string | null;
  websiteUrl: string | null;
  profileImage: string;
  profileImage90: string;
}

interface RawUser extends BaseUser {
  twitter_username: string | null;
  github_username: string | null;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
}


interface BaseFlareTag {
  name: string;
}

interface FlareTag extends BaseFlareTag {
  bgColorHex: string;
  textColorHex: string;
}

interface RawFlareTag extends BaseFlareTag {
  bg_color_hex: string;
  text_color_hex: string;
}
```

### Types
```ts
type ArticleState = 'all' | 'fresh' | 'rising';
type EndPoint = `/${string}`;
type NumberResolvable = number | `${number}`;
type Page = Article[];
type BaseFetchPageOptions = Partial<Pick<PageFetchOptions, 'perPage' | 'page'>>;
type Tags = string;
type TypeOfArticle = 'article';
type StringIndex<T> = { [key:string]: string }
```