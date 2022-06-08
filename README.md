# devdotto 

devdotto is an API wrapper for the [DEV](https://dev.to/) API written in TypeScript. This module is still under development with partial coverage of the DEV API. However, the following functions are now production ready:

- getArticles()
- getLatestArticles()
- getArticleByPath()
- getArticleById()
- getVideoArticles()
- getUserById()
- DevToClient
  - authorize()
  - getMyArticles()
  - getMyPublishedArticles()
  - getMyUnpublishedArticles()
  - getAllMyArticles()
  - createArticle()
  - updateArticleById()
  - getMe()

# Installation
Requires NodeJS 18.3 or higher
```ssh
npm i devdotto
```

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
import { DevToClient } from 'devdotto';

const key = 'YOUR_API_KEY';
const client = new DevToClient();

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

### Documentation Coming Soon

---

Consider contributing or reporting bugs: https://github.com/Elitezen/devdotto/pulls