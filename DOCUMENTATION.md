# Documentation (0.3.0)

## Functions

- [getArticles()](#getarticles)
- [getArticleById()](#getarticlebyid)
- [getArticleByPath()](#getarticlebypath)
- [getLatestArticles()](#getlatestarticles)
- [getVideoArticles()](#getvideoarticles)

## Classes

- [DevToClient](#devtoclient)

## Typings

- [Types](#types)
- [Interfaces](#interfaces)

# getarticles
### getArticles(options?:Partial<[PageFetchOptions](#pagefetchoptions)>):Promise<[Page](#page)<[Article](#article)>>

Fetches a page of articles.

```js
const page = await getArticles({
  perPage: 10
});
```

---

# getarticlebyid

### getArticleById(id:[NumberResolvable](#numberresolvable)):Promise<[Article](#article)>

Fetches an article by it's id.

```js
const article = await getArticleById('12345');
```

--- 

# getarticlebypath

### getArticleByPath(publisherName: string, slug:string):Promise<[Article](#article)>

Fetches an article by it's username/slug path.

```js
const article = await getArticleByPath('username', 'slug-here');
```

--- 

# getlatestarticles

### getLatestArticles(options?: [BaseFetchPageOptions](#basepagefetchoptions)):Promise<[Page](#page)<[Article](#article)>>

Fetches the newest articles.

```js
const page = await getLatestArticles({
  perPage: 10
});
```

---

# getvideoarticles

### getVideoArticles(options?: [BaseFetchPageOptions](#basepagefetchoptions)):Promise<[Page](#page)<[VideoArticle](#videoarticle)>>

Fetches video articles.

```js
const page = await getVideoArticles({
  perPage: 10
});
```

# devtoclient

## DevToClient

### Properties

.me

The user object of the owner of the API key.

**Type**: [User](#user) | null

---

### Methods

authorize(key:string, options?:[AuthorizationOptions](#authorizationoptions)):void

Assigns an API key to the client and fetches the user object. This function must be awaited for the user object to be assigned.

```js
const client = new DevToClient();

await client.authorize('api_key');
```

--- 

getMyArticles(options?:[BaseFetchPageOptions](#basefetchoptions)):Promise<[Article](#article)[]>

fetches the user's articles.

```js
const myArticles = await client.getMyArticles();
```

---

getMyPublishedArticles(options?:[BaseFetchPageOptions](#basefetchoptions)):Promise<[Article](#article)[]>

fetches the user's published articles.

```js
const myPublishedArticles = await client.getMyPublishedArticles();
```

---

getMyUnpublishedArticles(options?:[BaseFetchPageOptions](#basefetchoptions)):Promise<[Article](#article)[]>

fetches the user's unpublished articles.

```js
const myUnpublishedArticles = await client.getMyUnpublishedArticles();
```

---

getAllMyArticles(options?:[BaseFetchPageOptions](#basefetchoptions)):Promise<[Article](#article)[]>

fetches all the user's articles.

```js
const allMyArticles = await client.getAllMyArticles();
```

---

createArticle(data:[NewArticleData](#newarticledata)):Promise<[Article](#article)>

Creates a new article under the user's authentication.

```js
const myNewArticle = await client.createArticle({
  title: 'My New Article',
  description: 'Making a new article with devdotto!',
  bodyMarkdown: '<h1>Hello World!</h1>',
  tags: ['node'],
  published: false
});
```

---

updateArticleById(id:[NumberResolvable](#numberresolvable), data:[NewArticleData](#newarticledata)):Promise<[Article](#article)>

Updates one of the user's articles by it's id.

```js
client.updateArticleById('12345', {
  title: 'Updating My Article',
  description: 'Updating my article with devdotto!',
  bodyMarkdown: '<h1>Goodbye World!</h1>',
  tags: ['node'],
  published: false
});
```

---

getMe():Promise<[User](#user)>

```js
const myUser = await client.getMe();
```

Fetches the authenticator's user.

---

# typings

### Typings

### Types

# articlestate

```ts
type ArticleState = 'all' | 'fresh' | 'rising';
```

# endpoint

```ts
type EndPoint = `/${string}`;
```

# numberresolvable

```ts
type NumberResolvable = number | `${number}`;
```
# page

```ts
type Page<T> = T[];
```

# basefetchpageoptions

```ts
type BaseFetchPageOptions = Partial<Pick<PageFetchOptions, 'perPage' | 'page'>>;
```

# tags

```ts
type Tags = string;
```

# typesofarticles

```ts
type TypeOfArticle = 'article' | 'video_article';
```

# typeofmember

```ts
type TypeOfMember = 'user';
```

# stringindex

```ts
type StringIndex<T> = { [key:string]: string };
```

# videodurationformat

```ts
type VideoDurationFormat = 
  `${number}${number}:${number}${number}` | 
  `${number}${number}:${number}${number}:${number}${number}`;
```

### Interfaces
# authorizationoptions

```ts
interface AuthorizationOptions {
  cacheMe: boolean;
}
```

# basepagefetchoptions

```ts
interface BasePageFetchOptions {
  page: NumberResolvable;
  tag: Tags;
  tags: Tags[];
  username: string;
  state: ArticleState;
  top: NumberResolvable;
}
```
# comment

```ts
interface Comment {
  typeOf: 'comment';
  idCode: string;
  createdAt: string;
  bodyHtml: string;
  user: User;
  children: Comment[] | null;
}
```
# rawcomment

```ts
interface RawComment {
  type_of: 'comment';
  id_code: string;
  created_at: string;
  body_html: string;
  user: RawUser;
  children: RawComment[] | null;
}
```

# devdottoerrorresponse

```ts
interface DevDotToErrorResponse {
  error: string;
  status: number;
}
```

# pagefetchoptions

```ts
interface PageFetchOptions extends BasePageFetchOptions {
  perPage: NumberResolvable;
  tagsExclude: Tags[];
  collectionId: NumberResolvable;
}
```

# finalpagefetchoptions

```ts
interface FinalPageFetchOptions extends BasePageFetchOptions {
  per_page: number;
  tags_exclude: string;
  collection_id: number;
}
```
# basearticle

```ts
interface BaseArticle {
  id: number;
  title: number;
  description: string;
  tags: Tags[];
  slug: string;
  path: string;
  url: string;
}
```

# article

```ts
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
```

# rawarticle

```ts
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
```

# baseorganization

```ts
interface BaseOrganization {
  name: string;
  username: string;
  slug: string;
}
```

# organization

```ts
interface Organization extends BaseOrganization {
  profileImage: string;
  profileImage90: string;
}
```

# raworganization

```ts
interface RawOrganization extends BaseOrganization {
  profile_image: string;
  profile_image_90: string;
}
```

# basenewarticledata

```ts
interface BaseNewArticleData {
  title: string;
  published: boolean;
  series?: string;
  description: string;
  tags: Tags[];
}
```

# newarticledata

```ts
interface NewArticleData extends BaseNewArticleData {
  bodyMarkdown: string;
  mainImage?: string;
  canonicalUrl?: string;
  organizationId?: string;
}
```

# rawnewarticledata

```ts
interface RawNewArticleData extends BaseNewArticleData {
  body_markdown: string;
  main_image: string;
  canonical_url: string;
  organization_id: string;
}
```

# postoptions

```ts
interface PostOptions {
  method: 'GET' | 'POST' | 'PUT';
  headers: {
    'Content-Type'?: 'application/json' | string,
    'api-key': string
  },
  body?: string;
}
```

# baseuser

```ts
interface BaseUser {
  id: number;
  name: string;
  username: string;
}
```

# user

```ts
interface User extends BaseUser {
  typeOf: TypeOfMember;
  twitterUsername: string | null;
  githubUsername: string | null;
  websiteUrl: string | null;
  profileImage: string;
  profileImage90: string;
}
```

# rawuser

```ts
interface RawUser extends BaseUser {
  type_of: TypeOfMember;
  twitter_username: string | null;
  github_username: string | null;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
}
```

# baseflaretag

```ts
interface BaseFlareTag {
  name: string;
}
```

# flaretag

```ts
interface FlareTag extends BaseFlareTag {
  bgColorHex: string;
  textColorHex: string;
}
```

# rawflaretag

```ts
interface RawFlareTag extends BaseFlareTag {
  bg_color_hex: string;
  text_color_hex: string;
}
```

# basevideoarticle

```ts
interface BaseVideoArticle {
  id: string;
  path: string;
  title: string;
}
```

# videoarticle

```ts
interface VideoArticle extends BaseVideoArticle {
  typeOf: TypeOfArticle;
  cloudinaryVideoUrl: string;
  userId: string;
  videoDurationInMinutes: VideoDurationFormat;
  videoSourceUrl: string;
  user: Pick<User, 'name'>;
}
```

# rawvideoarticle

```ts
interface RawVideoArticle extends BaseVideoArticle {
  type_of: TypeOfArticle;
  cloudinary_video_url: string;
  user_id: string;
  video_duration_in_minutes: VideoDurationFormat;
  video_source_url: string;
  user: Pick<RawUser, 'name'>;
}
```

# articleidentifieroptions

```ts
interface ArticleIdentifierOptions {
  aId: NumberResolvable;
  pId?: never;
}
```

# finalarticleidentifieroptions

```ts
interface FinalArticleIdentifierOptions {
  a_id: NumberResolvable;
}
```

# podcastidentifieroptions

```ts
interface PodcastIdentifierOptions {
 pId: NumberResolvable;
 aId?: never;
}
```

# finalpodcastidentifieroptions

```ts
interface FinalPodcastIdentifierOptions {
 p_id: NumberResolvable;
}
```