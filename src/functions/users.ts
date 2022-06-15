import { ProfileImage, User } from "../typings/interfaces";
import { NumberResolvable } from "../typings/types";
import DEVUtil from "../structures/DEVUtil";

const { request } = DEVUtil;

/**
 * Fetches a DEV user by their id.
 * @param {NumberResolvable} id The user's id.
 * @returns {Promise<User>}
 */
export async function getUserById(id:NumberResolvable):Promise<User> {
  return await request<User>(`/users/${id}`);
}

/**
 * Fetches the profile image of a user or organization.
 * @param {string} username The entity's username.
 * @returns {Promise<ProfileImage>}
 */
export async function getEntityProfilePicture(username: string):Promise<ProfileImage> {
  return await request(`/profile_images/${username}`);
}