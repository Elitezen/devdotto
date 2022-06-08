import { ArticleState, NumberResolvable, Tags, TypeOfArticle, TypeOfMember } from "./types";

export interface AuthorizationOptions {
  cacheMe: boolean;
}

export interface BasePageFetchOptions {
  page: NumberResolvable;
  tag: Tags;
  tags: Tags[];
  username: string;
  state: ArticleState;
  top: NumberResolvable;
}

export interface DevDotToErrorResponse {
  error: string;
  status: number;
}

export interface PageFetchOptions extends BasePageFetchOptions {
  perPage: NumberResolvable;
  tagsExclude: Tags[];
  collectionId: NumberResolvable;
}

export interface FinalPageFetchOptions extends BasePageFetchOptions {
  per_page: number;
  tags_exclude: string;
  collection_id: number;
}

export interface BaseArticle {
  id: number;
  title: number;
  description: string;
  tags: Tags[];
  slug: string;
  path: string;
  url: string;
}

export interface Article extends BaseArticle {
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

export interface RawArticle extends BaseArticle {
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

export interface BaseOrganization {
  name: string;
  username: string;
  slug: string;
}

export interface Organization extends BaseOrganization {
  profileImage: string;
  profileImage90: string;
}

export interface RawOrganization extends BaseOrganization {
  profile_image: string;
  profile_image_90: string;
}

export interface BaseNewArticleData {
  title: string;
  published: boolean;
  series?: string;
  description: string;
  tags: Tags[];
}

export interface NewArticleData extends BaseNewArticleData {
  bodyMarkdown: string;
  mainImage?: string;
  canonicalUrl?: string;
  organizationId?: string;
}

export interface RawNewArticleData extends BaseNewArticleData {
  body_markdown: string;
  main_image: string;
  canonical_url: string;
  organization_id: string;
}

export interface PostOptions {
  method: 'GET' | 'POST' | 'PUT';
  headers: {
    'Content-Type'?: 'application/json' | string,
    'api-key': string
  },
  body?: string;
}

export interface BaseUser {
  id: number;
  name: string;
  username: string;
}

export interface User extends BaseUser {
  typeOf: TypeOfMember;
  twitterUsername: string | null;
  githubUsername: string | null;
  websiteUrl: string | null;
  profileImage: string;
  profileImage90: string;
}

export interface RawUser extends BaseUser {
  type_of: TypeOfMember;
  twitter_username: string | null;
  github_username: string | null;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
}

export interface BaseFlareTag {
  name: string;
}

export interface FlareTag extends BaseFlareTag {
  bgColorHex: string;
  textColorHex: string;
}

export interface RawFlareTag extends BaseFlareTag {
  bg_color_hex: string;
  text_color_hex: string;
}