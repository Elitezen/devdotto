import { BasePageFetchOptions, Organization, User } from "../typings/interfaces";
import DEVUtil from "../structures/DEVUtil";
import { BaseFetchPageOptions, Page } from "../typings/types";

const { request } = DEVUtil;

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
  username:string, options?:BaseFetchPageOptions
):Promise<Page<User>> {
  return await request(`/organizations/${username}/users`);
}