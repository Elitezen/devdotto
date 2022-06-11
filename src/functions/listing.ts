import { Listing } from "../typings/interfaces";
import DevDotToUtil from "../structures/DevDotToUtil";
import { CategorizedListingOptions } from "../typings/types";

const { request, parseParameters } = DevDotToUtil;

/**
 * Fetches listings.
 * @param {CategorizedListingOptions} options 
 * @returns {Promise<Listing[]>}
 */
export async function getListings(
  options?:CategorizedListingOptions
):Promise<Listing[]> {
  const query = parseParameters(options);
  return await request(`/listings${query}`);
}