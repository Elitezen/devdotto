import { DEVErrorResponse, Listing } from "../typings/interfaces";
import DEVUtil from "../structures/DEVUtil";
import { CategorizedListingOptions, NumberResolvable } from "../typings/types";
import DEVError from "../structures/DEVError";

const { request, parseParameters } = DEVUtil;

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

/**
 * Fetches a listing by id. If the listing is unpublished and belongs to you use DEVClient.getMyListingById()
 * @param {NumberResolvable} id 
 * @returns {Promise<Listing>}
 */
export async function getLisitngById(id:NumberResolvable):Promise<Listing> {
  try {
    const data = await request<Listing | DEVErrorResponse>(`/listings/${id}`);
    if ((data as DEVErrorResponse).error) throw data as DEVErrorResponse;
    return data as Listing;
  } catch (err) {
    const e = err as DEVErrorResponse;
    throw new DEVError('Listing not found. If the listing is unpublished and belongs to you use DEVClient.getMyListingById()', e.status);
  }
}