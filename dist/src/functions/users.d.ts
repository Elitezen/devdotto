import { User } from "../typings/interfaces";
import { NumberResolvable } from "../typings/types";
/**
 * Fetches a DEV user by their id.
 * @param {NumberResolvable} id The user's id.
 * @returns {Promise<User>}
 */
export declare function getUserById(id: NumberResolvable): Promise<User>;
