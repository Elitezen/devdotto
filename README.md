# DevDotTo
This project is a NodeJS wrapper for the Dev.to API: https://developers.forem.com/api and is currently in alpha-stage. Consider contributing functions for various endpoints or typings for API result data. View the link for the documentation this wrapper is being based off.

Requires Node 16 or higher.

## Demo
```ts
import DevToClient from "./src/classes/DevToClient";

const client = new DevToClient({
  articlesPerPage: 5,
});

client
  .fetchPages()
  .then(page => {
    const article = page[0];
    console.log(article);
  });
```

```json
{
  typeOf: 'article',
  id: 1100789,
  title: 'How did Javascript click for you?',
  description: 'For more context, while learning Javascript what did you do that made that "Javascript difficulty" go...',
  readablePublishDate: 'May 31',
  slug: 'how-did-javascript-click-for-you-23n',
  path: '/glowreeyah/how-did-javascript-click-for-you-23n',
  url: 'https://dev.to/glowreeyah/how-did-javascript-click-for-you-23n',
  commentsCount: 21,
  publicReactionsCount: 8,
  collectionId: null,
  publishedTimestamp: '2022-05-31T13:32:19Z',
  positiveReactionsCount: 8,
  coverImage: null,
  socialImage: 'https://dev.to/social_previews/article/1100789.png',
  canonicalUrl: 'https://dev.to/glowreeyah/how-did-javascript-click-for-you-23n',
  createdAt: '2022-05-31T13:32:19Z',
  editedAt: null,
  crosspostedAt: null,
  publishedAt: '2022-05-31T13:32:19Z',
  lastCommentAt: '2022-05-31T20:43:36Z',
  readingTimeMinutes: 1,
  tagList: [ 'javascript', 'discuss', 'webdev' ],
  tags: 'javascript, discuss, webdev',
  user: {
    name: 'Gloria Asuquo',
    username: 'glowreeyah',
    twitterUsername: '_Glowreeyah',
    githubUsername: 'glowreeya-01',
    websiteUrl: null,
    profileImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--rkvmm-mL--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/715272/82adac15-e51e-494b-815d-82ef2cb32c86.jpeg',
    profileImage90: 'https://res.cloudinary.com/practicaldev/image/fetch/s--rPN1FCCE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/715272/82adac15-e51e-494b-815d-82ef2cb32c86.jpeg'
  },
  flareTag: { name: 'discuss', bgColorHex: '#1ad643', textColorHex: '#FFFFFF' }
}
```