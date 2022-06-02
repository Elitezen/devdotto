# DevDotTo
This project is a NodeJS wrapper for the Dev.to API: https://developers.forem.com/api and is currently in alpha-stage. Consider contributing functions for various endpoints or typings for API result data. View the link for the documentation this wrapper is being based off. It is not recommended to use this wrapper for production just yet.

Consider contributing or opening issues: https://github.com/Elitezen/devdotto

--- 

# Changelog (0.2.0)

## 0.2.0
Removed Client, created the following functions:

- fetchArticle()
- fetchPage()
- fetchPageLatest()
- fetchVideoArticles()

Added and fixed typings, including Video Article interfaces.

---

Requires Node 16 or higher.

Functions so far:

- fetchArticle()
- fetchPage()
- fetchPageLatest()
- fetchVideoArticles()

## Typings Dump

### Interfaces
```ts
interface BaseProfile {
  name: string;
  username: string;
  profileImage: string;
  profileImage90: string;
}

interface RawBaseProfile {
  name: string;
  username: string;
  profile_image: string;
  profile_image_90: string;
}

interface RawFlareTag {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
}

interface FlareTag {
  name: string;
  bgColorHex: string;
  textColorHex: string;
}

interface Organization extends BaseProfile {
  slug: string;
}

interface FinalPageFetchOptions {
  per_page: number;
  page: NumberResolvable;
  tag: string;
  tags: string[] | string;
  tags_exclude: string[] | string;
  username: string;
  state: ArticleState;
  top: number;
  collection_id: NumberResolvable;
}

interface PageFetchOptions {
  perPage: number;
  page: NumberResolvable;
  tag: string;
  tags: string[] | string;
  tagsExclude: string[] | string;
  username: string;
  state: ArticleState;
  top: number;
  collectionId: NumberResolvable;
}

interface RawArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  body_html: string | null;
  body_markdown: string | null;
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

interface Article {
  typeOf: string;
  id: number;
  title: string;
  description: string;
  bodyHtml: string | null;
  bodyMarkdown: string | null;
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

interface RawVideoArticle {
  type_of: string;
  id: number;
  path: string;
  cloudinary_video_url: string;
  title: string;
  user_id: number;
  video_duration_in_minutes: number;
  video_source_url: string;
  user: MiniUser;
}

interface VideoArticle {
  typeOf: string;
  id: number;
  path: string;
  cloudinaryVideoUrl: string;
  title: string;
  userId: number;
  videoDurationInMinutes: number;
  videoSourceUrl: string;
  user: MiniUser;
}

interface RawUser extends RawBaseProfile {
  twitter_username: string;
  github_username: string;
  website_url: string;
}

interface User extends BaseProfile {
  twitterUsername: string;
  githubUsername: string;
  websiteUrl: string;
}
```

### Types
```ts
type ArticleState = 'FRESH' | 'RISING' | 'ALL';
type BasePageOptions = Partial<Pick<PageFetchOptions, "page" | "perPage">>;
type MiniUser = Pick<User, 'name'>;
type NumberResolvable = number | `${number}`; 
type RawPage = RawArticle[];
type Page = Article[];
```