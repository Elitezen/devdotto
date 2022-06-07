import getArticleById from "./src/functions/getArticleById";
import getArticles from "./src/functions/getArticles";
import getLatestArticles from "./src/functions/getLatestArticles";
import DevToClient from "./src/structures/DevToClient";

export {
  getArticles,
  getLatestArticles,
  getArticleById
};

const client = new DevToClient()
  .authorize('/CWoN8ybguC4J5zSfFZiwqfkU');

client
  .getMyArticles()
  .then(console.log);