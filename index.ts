import { 
  getArticleById,
  getArticleByPath,
  getArticles,
  getLatestArticles 
} from './src/functions/articles';

import { getUserById } from './src/functions/user';
import DevToClient from "./src/structures/DevToClient";

export {
  getArticles,
  getLatestArticles,
  getArticleByPath,
  getArticleById,
  getUserById,
  DevToClient
};