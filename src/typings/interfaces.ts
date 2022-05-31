import { ArticleState, NumberResolvable } from "./types";

export interface BaseProfile {
  name: string;
  username: string;
  profileImage: string;
  profileImage90: string;
}

export interface RawBaseProfile {
  name: string;
  username: string;
  profile_image: string;
  profile_image_90: string;
}

export interface RawFlareTag {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
}

export interface FlareTag {
  name: string;
  bgColorHex: string;
  textColorHex: string;
}

export interface Organization extends BaseProfile {
  slug: string;
}

export interface PageScrollerOptions {
  articlesPerPage: NumberResolvable;
}

export interface FinalPageFetchOptions {
  page: NumberResolvable;
  tag: string;
  // tags: string[] | string;
  tags_exclude: string[] | string;
  username: string;
  state: ArticleState;
  top: number;
  collection_id: NumberResolvable;
}

export interface PageFetchOptions {
  page: NumberResolvable;
  tag: string;
  // tags: string[] | string;
  tagsExclude: string[] | string;
  username: string;
  state: ArticleState;
  top: number;
  collectionId: NumberResolvable;
}

export interface RawArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string | null;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: RawUser;
  organization: Organization | null;
  flare_tag: RawFlareTag;
}

export interface Article {
  typeOf: string;
  id: number;
  title: string;
  description: string;
  readablePublishDate: string;
  slug: string;
  path: string;
  url: string;
  commentsCount: number;
  publicReactionsCount: number;
  collectionId: number | null;
  publishedTimestamp: string;
  positiveReactionsCount: number;
  coverImage: string | null;
  socialImage: string;
  canonicalUrl: string;
  createdAt: string;
  editedAt: string | null;
  crosspostedAt: string | null;
  publishedAt: string;
  lastCommentAt: string | null;
  readingTimeMinutes: number;
  tagList: string[];
  tags: string;
  user: User;
  organization: Organization | null;
  flareTag: FlareTag;
}

export interface RawUser extends RawBaseProfile {
  twitter_username: string;
  github_username: string;
  website_url: string;
}

export interface User extends BaseProfile {
  twitterUsername: string;
  githubUsername: string;
  websiteUrl: string;
}