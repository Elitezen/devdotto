# devdotto 

devdotto is an API wrapper for the [DEV](https://dev.to/) API written in TypeScript. This module is still under development with partial coverage of the DEV API currently being updated every few days.

# Installation
Requires NodeJS 18.3 or higher
```ssh
npm i devdotto
```

# What's New 
Renamed DEV references from DevTo/DevDotTo to DEV


# Example Usage

## Fetching Articles
```js
import { getArticles } from 'devdotto';

const articles = await getArticles({
  perPage: 1
});

console.log(articles);
```

### Output

<details>
  <summary>Click to view</summary>

  ```js
  [
  {
    typeOf: 'article',
    id: 1108433,
    title: 'Getting Your Conference Talk Proposal Accepted 🎙' ,
    description: 'Ever wonder what it takes to get your conference talk accepted? In this episode of DevDiscuss we talk...',
    readablePublishDate: 'Jun 8',
    slug: 'getting-your-conference-talk-proposal-accepted-1cb6',
    path: '/devteam/getting-your-conference-talk-proposal-accepted-1cb6',
    url: 'https://dev.to/devteam/getting-your-conference-talk-proposal-accepted-1cb6',
    commentsCount: 0,
    publicReactionsCount: 4,
    collectionId: null,
    publishedTimestamp: '2022-06-08T15:31:20Z',
    positiveReactionsCount: 4,
    coverImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--bBW3B-K6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kvyy0bbgzgepfipg93v3.png',
    socialImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--oRDMUBIb--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kvyy0bbgzgepfipg93v3.png',
    canonicalUrl: 'https://dev.to/devteam/getting-your-conference-talk-proposal-accepted-1cb6',
    createdAt: '2022-06-08T15:31:20Z',
    editedAt: null,
    crosspostedAt: null,
    publishedAt: '2022-06-08T15:31:20Z',
    lastCommentAt: '2022-06-08T15:31:20Z',
    readingTimeMinutes: 1,
    tagList: [ 'podcast', 'career', 'devrel', 'productivity' ],
    tags: 'podcast, career, devrel, productivity',
    user: {
      name: 'Ben Halpern',
      username: 'ben',
      twitterUsername: 'bendhalpern',
      githubUsername: 'benhalpern',
      websiteUrl: 'http://benhalpern.com',
      profileImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--nz-jndal--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png',
      profileImage90: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Ea1OGrCb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png'
    },
    organization: {
      name: 'The DEV Team',
      username: 'devteam',
      slug: 'devteam',
      profileImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--CAGmUhNa--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png',
      profileImage90: 'https://res.cloudinary.com/practicaldev/image/fetch/s--mbsgKaXh--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png'
    }
  }
]
  ```
</details>

---

## Making Authenticated Requests

```js
import { DEVClient } from 'devdotto';

const key = 'YOUR_API_KEY';
const client = new DEVClient();

await client.authorize(key);

client.createArticle({
  title: 'My New Article',
  description: 'Making a new article with devdotto!',
  bodyMarkdown: '<h1>Hello World!</h1>',
  tags: ['node'],
  published: false
});
```

## Result
![Result](images/demo_create_article.png)

# Documentation (0.4.0)

For full docs visit: https://github.com/Elitezen/devdotto/wiki/Documentation

## Functions

- [getArticles()](#getarticles)
- [getArticleById()](#getarticlebyid)
- [getArticleByPath()](#getarticlebypath)
- [getLatestArticles()](#getlatestarticles)
- [getVideoArticles()](#getvideoarticles)
- [getArticleComments()](#getarticlecomments)
- [getCommentById()](#getcommentbyid)
- [getListings()](#getlistings)
- [getUserById()](#getuserbyid)

## Classes

- [DEVClient](#DEVClient)

# getarticles
### getArticles(options?:Partial<[PageFetchOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#pagefetchoptions)>):Promise<[Page](https://github.com/Elitezen/devdotto/wiki/Documentation#page)<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)>>

Fetches a page of articles.

```js
const page = await getArticles({
  perPage: 10
});
```

---

# getarticlebyid

### getArticleById(id:[NumberResolvable](https://github.com/Elitezen/devdotto/wiki/Documentation#numberresolvable)):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)>

Fetches an article by it's id.

```js
const article = await getArticleById('12345');
```

--- 

# getarticlebypath

### getArticleByPath(publisherName: string, slug:string):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)>

Fetches an article by it's username/slug path.

```js
const article = await getArticleByPath('username', 'slug-here');
```

--- 

# getlatestarticles

### getLatestArticles(options?: [BaseFetchPageOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#basepagefetchoptions)):Promise<[Page](https://github.com/Elitezen/devdotto/wiki/Documentation#page)<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)>>

Fetches the newest articles.

```js
const page = await getLatestArticles({
  perPage: 10
});
```

---

# getvideoarticles

### getVideoArticles(options?: [BaseFetchPageOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#basepagefetchoptions)):Promise<[Page](https://github.com/Elitezen/devdotto/wiki/Documentation#page)<[VideoArticle](https://github.com/Elitezen/devdotto/wiki/Documentation#videoarticle)>>

Fetches video articles.

```js
const page = await getVideoArticles({
  perPage: 10
});
```

# getarticlecomments

### getArticleComments(id: [ArticleIdentifierOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#articleidentifieroptions) | [PodcastIdentifierOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#podcastidentifieroptions)):Promise<[Comment](https://github.com/Elitezen/devdotto/wiki/Documentation#comment)[]>

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

### getCommentById(id:[NumberResolvable](https://github.com/Elitezen/devdotto/wiki/Documentation#numberresolvable)): Promise<[Comment](https://github.com/Elitezen/devdotto/wiki/Documentation#comment)>

Fetches a comment by it's id.

```js
const comment = await getCommentById('12345');
```

# getlistings

### getListings(options?:[CategorizedListingOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#categorizedlistingoptions)):Promise<[Listing](https://github.com/Elitezen/devdotto/wiki/Documentation#listing)[]>

Fetches listings.

```js
const listings = await getListings();
```

# getuserbyid

# getUserById(id:[NumberResolvable](https://github.com/Elitezen/devdotto/wiki/Documentation#numberresolvable)):Promise<[User](https://github.com/Elitezen/devdotto/wiki/Documentation#user)>

Fetches a DEV user by their id.

```js
const user = await getUserById('12345');
```

# DEVClient

## DEVClient

### Properties

.me

The user object of the owner of the API key.

**Type**: [User](https://github.com/Elitezen/devdotto/wiki/Documentation#user) | null

---

### Methods

authorize(key:string, options?:[AuthorizationOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#authorizationoptions)):void

Assigns an API key to the client and fetches the user object. This function must be awaited for the user object to be assigned.

```js
const client = new DEVClient();

await client.authorize('api_key');
```

--- 

getMyArticles(options?:[BaseFetchPageOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#basefetchoptions)):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)[]>

fetches the user's articles.

```js
const myArticles = await client.getMyArticles();
```

---

getMyPublishedArticles(options?:[BaseFetchPageOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#basefetchoptions)):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)[]>

fetches the user's published articles.

```js
const myPublishedArticles = await client.getMyPublishedArticles();
```

---

getMyUnpublishedArticles(options?:[BaseFetchPageOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#basefetchoptions)):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)[]>

fetches the user's unpublished articles.

```js
const myUnpublishedArticles = await client.getMyUnpublishedArticles();
```

---

getAllMyArticles(options?:[BaseFetchPageOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#basefetchoptions)):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)[]>

fetches all the user's articles.

```js
const allMyArticles = await client.getAllMyArticles();
```

---

getMyFollowedTags():Promise<[FollowedTags](https://github.com/Elitezen/devdotto/wiki/Documentation#followedtags)[]>

Fetches your followed tags.

```js
const myFollowedTags = await client.getMyFollowedTags();
```

---

getMyFollowers(options?:Partial<[SortedPageOptions](https://github.com/Elitezen/devdotto/wiki/Documentation#sortedpageoptions)>):Promise<[Follower](https://github.com/Elitezen/devdotto/wiki/Documentation#follower)[]>

Fetches your followers.

```js
const myFollowers = await DEVClient.getMyFollowers();
```

---

createArticle(data:[NewArticleData](https://github.com/Elitezen/devdotto/wiki/Documentation#newarticledata)):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)>

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

updateArticleById(id:[NumberResolvable](https://github.com/Elitezen/devdotto/wiki/Documentation#numberresolvable), data:[NewArticleData](https://github.com/Elitezen/devdotto/wiki/Documentation#newarticledata)):Promise<[Article](https://github.com/Elitezen/devdotto/wiki/Documentation#article)>

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

getMe():Promise<[User](https://github.com/Elitezen/devdotto/wiki/Documentation#user)>

```js
const myUser = await client.getMe();
```

Fetches the authenticator's user.