import { ArticleIdentifierOptions, PodcastIdentifierOptions, Comment } from "../typings/interfaces";
/**
 * Fetches the comments of an article.
 * @param {ArticleIdentifierOptions | PodcastIdentifierOptions} id The id of the article or podcast.
 * @returns {Promise<Comment[]>}
 */
export declare function getArticleComments(id: ArticleIdentifierOptions | PodcastIdentifierOptions): Promise<Comment[]>;
/**
 * Fetches a comment by it's id.
 * @param {NumberResolvable} id
 * @returns {Promise<Comment>}
 */
export declare function getCommentById(id: string): Promise<Comment>;
