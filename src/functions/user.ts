import { User } from "../typings/interfaces";
import { NumberResolvable } from "../typings/types";
import DevDotToUtil from "../structures/DevDotToUtil";

const { request } = DevDotToUtil;

/**
 * Fetches a DEV user by their id.
 * @param {NumberResolvable} id The user's id.
 * @returns {Promise<User>}
 */
export async function getUserById(id:NumberResolvable):Promise<User> {
  try {
    const req = await request<User>(`/users/${id}`);
    return req;
  } catch(err) {
    throw err;
  }
}