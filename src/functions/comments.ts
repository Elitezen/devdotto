import { ArticleIdentifierOptions, PodcastIdentifierOptions, Comment } from "../typings/interfaces";
import DevDotToUtil from "../structures/DevDotToUtil";
import { NumberResolvable } from "../typings/types";

const { request, parseParameters } = DevDotToUtil;

/**
 * Fetches the comments of an article.
 * @param {ArticleIdentifierOptions | PodcastIdentifierOptions} id The id of the article or podcast. 
 * @returns {Promise<Comment[]>}
 */
export async function getArticleComments(
  id: ArticleIdentifierOptions | PodcastIdentifierOptions
):Promise<Comment[]> {
  const query = parseParameters(id);
  return await request(`/comments${query}`);
}

/**
 * Fetches a comment by it's id.
 * @param {NumberResolvable} id 
 * @returns {Promise<Comment>}
 */
export async function getCommentById(id:string): Promise<Comment> {
  return await request(`/comments/${id}`);
}