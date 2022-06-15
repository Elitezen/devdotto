import { Tag } from "../typings/interfaces";
import { BaseFetchPageOptions, Page } from "../typings/types";
import DEVUtil from "../structures/DEVUtil";

const { request } = DEVUtil;

/**
 * Fetches all tags.
 * @param {BaseFetchPageOptions} options 
 * @returns {Promise<Page<Tag>>}
 */
export async function getTags(
  options?:BaseFetchPageOptions
):Promise<Page<Tag>> {
  return await request('/tags');
}