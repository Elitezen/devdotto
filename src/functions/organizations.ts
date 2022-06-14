import { Article, BasePageFetchOptions, Listing, Organization, User } from "../typings/interfaces";
import { BaseFetchPageOptions, CategorizedListingOptions, Page } from "../typings/types";
import DEVUtil from "../structures/DEVUtil";

const { request, parseParameters } = DEVUtil;

/**
 * Fetches an organization by it's username
 * @param {string} username 
 * @returns {Promise<Organization>}
 */
export async function getOrganizationByUsername(
  username:string
):Promise<Organization> {
  return await request(`/organizations/${username}`);
}

/**
 * Fetches the user's of an organization by organization username.
 * @param {string} username 
 * @param {BaseFetchPageOptions} options 
 * @returns {Promise<Page<User>>}
 */
export async function getOrganizationsUsers(
  username: string, options?:BaseFetchPageOptions
):Promise<Page<User>> {
  return await request(`/organizations/${username}/users`);
}

/**
 * Fetches the listings of an organization by organization username.
 * @param {string} username 
 * @param {CategorizedListingOptions} options 
 * @returns {Promise<Page<Listing & { organization:Organization }>>}
 */
export async function getOrganizationsListings(
  username: string, options?:CategorizedListingOptions
):Promise<Page<Listing & { organization:Organization }>> {
  const query = parseParameters(options);
  return await request(`/organizations/${username}/listings${query}`);
}

/**
 * Fetches the articles of an organization by organization username.
 * @param {string} username 
 * @param {BaseFetchPageOptions} options 
 * @returns {Promise<Page<Article>>}
 */
export async function getOrganizationsArticles(
  username: string, options?:BaseFetchPageOptions
):Promise<Page<Article>> {
  const query = parseParameters(options);
  return await request(`/organizations/${username}/articles${query}`);
}