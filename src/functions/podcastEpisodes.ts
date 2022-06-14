import { PodcastEpisode, UsernameBasedOptions } from "../typings/interfaces";
import { BaseFetchPageOptions, Page } from "../typings/types";
import DEVUtil from "../structures/DEVUtil";

const { request, parseParameters } = DEVUtil;

/**
 * Fetches podcast episodes.
 * @param {BaseFetchPageOptions & Partial<UsernameBasedOptions>} options 
 * @returns {Promise<Page<PodcastEpisode>>}
 */
export async function getPodcastEpisodes(
  options?:BaseFetchPageOptions & Partial<UsernameBasedOptions>
):Promise<Page<PodcastEpisode>> {
  const query = parseParameters(options);
  return await request(`/podcast_episodes${query}`);
}