# Documentation (0.6.0)

## Functions

- [getArticles()](#getarticles)
- [getArticleById()](#getarticlebyid)
- [getArticleByPath()](#getarticlebypath)
- [getLatestArticles()](#getlatestarticles)
- [getVideoArticles()](#getvideoarticles)
- [getArticleComments()](#getarticlecomments)
- [getCommentById()](#getcommentbyid)
- [getListings()](#getlistings)
- [getListingById()](#getlistingbyid)
- [getOrganizationByUsername()](#getorganizationbyusername)
- [getOrganizationsUsers()](#getorganizationsusers)
- [getOrganizationsListings()](#getorganizationslistings)
- [getOrganizationsArticles()](#getorganizationsarticles)
- [getPodcastEpisodes()](#getpodcastepisodes);
- [getUserById()](#getuserbyid)

## Classes

- [DEVClient](#DEVClient)

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

# getarticlecomments

### getArticleComments(id: [ArticleIdentifierOptions](#articleidentifieroptions) | [PodcastIdentifierOptions](#podcastidentifieroptions)):Promise<[Comment](#comment)[]>

Fetches the comments of an article.

```js
const articleComments = await getArticleComments({
  aId: '12345'
});

const podcastComments = await getArticleComments({
  pId: '12345'
});
```

# getcommentbyid

### getCommentById(id:[NumberResolvable](#numberresolvable)): Promise<[Comment](#comment)>

Fetches a comment by it's id.

```js
const comment = await getCommentById('12345');
```

# getlistings

### getListings(options?:[CategorizedListingOptions](#categorizedlistingoptions)):Promise<[Listing](#listing)[]>

Fetches listings.

```js
const listings = await getListings();
```

# getlistingbyid

### getLisitngById(id:[NumberResolvable](#numberresolvable)):Promise<[Listing](#listing)>

Fetches a listing by id. If the listing is unpublished and belongs to you use DEVClient.getMyListingById().

```js
const listing = await getListingById('12345');
```

# getorganizationbyusername

# getOrganizationByUsername(username:string):Promise<[Organization](#organization)>

Fetches an organization by it's username

```js
const organization = await getOrganizationByUsername('username-here');
```

# getorganizationsusers

# getOrganizationsUsers(username:string, options?:[BaseFetchPageOptions](#basefetchpageoptions)):Promise<[Page](#page)<[User](#user)>>

Fetches the user's of an organization by organization username.

```js
const users = await getOrganizationsUsers('org-username-here');
```

# getorganizationslistings

# getOrganizationsListings(username: string, options?:[CategorizedListingOptions](#categorizedlistingoptions)):Promise<[Page](#page)<[Listing](#listing) & { organization:[Organization](#organization) }>>

Fetches the listings of an organization by organization username.

```js
const listings = await getOrganizationsListings('org-username-here', {
  perPage: 5,
  page: 1,
  category: '...'
});
```

# getorganizationsarticles

# getOrganizationsArticles(username: string, options?:[BaseFetchPageOptions](#basefetchpageoptions)):Promise<[Page](#page)<[Article](#article)>>

Fetches the articles of an organization by organization username.

```js
const articles = await getOrganizationsArticles('org-username-here', {
  perPage: 5,
  page: 1
});
```

# getpodcastepisodes

# getPodcastEpisodes(options?:[BaseFetchPageOptions](#basefetchpageoptions) & Partial<[UsernameBasedOptions](#usernamebasedoptions)>):Promise<[Page](#page)<[PodcastEpisode](#podcastepisode)>>

Fetches podcast episodes.

```js
const episodes = await getPodcastEpisodes({
  perPage: 5,
  page: 1,
  username: '...'
});
```

# getuserbyid

# getUserById(id:[NumberResolvable](#numberresolvable)):Promise<[User](#user)>

Fetches a DEV user by their id.

```js
const user = await getUserById('12345');
```

# DEVClient

## DEVClient

### Properties

.me

The user object of the owner of the API key.

**Type**: [User](#user) | null

---

### Methods

authorize(key:string, options?:[AuthorizationOptions](#authorizationoptions)):void

Assigns an API key to the client and fetches the user object. This function must be awaited for the user object to be assigned.

```js
const client = new DEVClient();

await client.authorize('api_key');
```

--- 

getMyArticles(options?:[BaseFetchPageOptions](#basefetchoptions)):Promise<[Article](#article)[]>

fetches the user's articles.

```js
const myArticles = await client.getMyArticles();
```

---

getMyListingById(id:[NumberResolvable](#numberresolvable)):Promise<[Listing](#listing)>

Fetches your listing by id.

```js
const myListing = await client.getMyListingById('12345');
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

getMyFollowedTags():Promise<[FollowedTags](#followedtags)[]>

Fetches your followed tags.

```js
const myFollowedTags = await client.getMyFollowedTags();
```

---

getMyFollowers(options?:Partial<[SortedPageOptions](#sortedpageoptions)>):Promise<[Follower](#follower)[]>

Fetches your followers.

```js
const myFollowers = await DEVClient.getMyFollowers();
```

---

getMyReadingList(options?:[BaseFetchPageOptions](#basefetchpageoptions)):Promise<[Page](#page)<[ReadingListItem](#readinglistitem)>>

Fetches your reading list.

```js
const myList = await DEVClient.getMyReadingList();
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

### Typings

### Types

# articlestate

```ts
type ArticleState = 'all' | 'fresh' | 'rising';
```

# categorizedlistingoptions

```ts
type CategorizedListingOptions = BasePageOptions & ListingCategoryOptions;
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

# sortedpageoptions

```ts
type SortedPageOptions = BasePageOptions & SortOptions;
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
  organization: OrganizationCover;
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
  organization: RawOrganizationCover;
  flare_tag: RawFlareTag;
}
```

# baseorganization

```ts
interface BaseOrganizationCover {
  name: string;
  username: string;
  slug: string;
}
```

# organization

```ts
interface OrganizationCover extends BaseOrganizationCover {
  profileImage: string;
  profileImage90: string;
}
```

# raworganization

```ts
interface RawOrganizationCover extends BaseOrganizationCover {
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

# basenewlistingdata

```ts
export interface BaseNewListingData {
  title: string;
  category: ListingCategory;
  tags: Tags[];
  location: string;
  // action: ListingAction;
}
```

# newlistingdata

```ts
export interface NewListingData extends BaseNewListingData {
  bodyMarkdown: string;
  tagList: string;
  expiresAt: string;
  contactViaConnect: string;
}
```

# rawnewlistingdata

```ts
export interface RawNewListingData extends BaseNewListingData {
  body_markdown: string;
  tag_list: string;
  expires_at: string;
  contact_via_connect: string;
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

# followedtags

```ts
export interface FollowedTags {
  id: number;
  name: Tags;
  points: number;
}
```

# basefollower

```ts
interface BaseFollower {
  id: number;
  name: string;
  path: EndPoint;
  username: string;
}
```

# follower

```ts
interface Follower extends BaseFollower {
  typeOf: 'user_follower';
  createdAt: string;
  profileImage: string;
}
```

# rawfollower

```ts
interface RawFollower extends BaseFollower {
  type_of: 'user_follower';
  created_at: string;
  profile_image: string;
}
```

# baselisting

```ts
interface BaseListing {
  id: number;
  title: string;
  slug: string;
  tags: Tags[];
  category: string;
  published: boolean;
}
```

# listing

```ts
interface Listing extends BaseListing {
  typeOf: 'listing';
  createdAt: string;
  bodyMarkdown: string;
  tagList: string;
  processedHtml: string;
  user: Omit<User, 'id'>;
}
```

# rawlisting

```ts
interface RawListing extends BaseListing {
  type_of: 'listing';
  created_at: string;
  body_markdown: string;
  tag_list: string;
  processed_html: string;
  user: Omit<RawUser, 'id'>;
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

# basepodcast

```ts
export interface BasePodcast {
  title: string;
  slug: string;
}
```

# podcast

```ts
export interface Podcast extends BasePodcast {
  imageUrl: string;
}
```

# rawpodcast

```ts
export interface RawPodcast extends BasePodcast {
  image_url: string;
}
```

# basepodcastepisode

```ts
export interface BasePodcastEpisode {
  id: number;
  path: EndPoint;
  title: string;
}
```

# podcastepisode

```ts
export interface PodcastEpisode extends BasePodcastEpisode {
  typeOf: 'podcast_episodes';
  imageUrl: string;
  podcast: Podcast
}
```

# rawpodcastepisode

```ts
export interface RawPodcastEpisode extends BasePodcastEpisode {
  type_of: 'podcast_episodes';
  image_url: string;
  podcast: RawPodcast;
}
```

# usernamebasedoptions

```ts
export interface UsernameBasedOptions {
  username: string;
}
```

# basereadinglistitem

```ts
export interface BaseReadingListItem {
  id: number;
  status: ReadingListItemStatus;
}
```

# readinglistitem

```ts
export interface ReadingListItem extends BaseReadingListItem {
  typeOf: 'string';
  createdAt: string;
  article: Article;
}
```

# rawreadinglistitem

```ts
export interface RawReadingListItem extends BaseReadingListItem {
  type_of: 'string';
  created_at: string;
  article: RawArticle;
}
```