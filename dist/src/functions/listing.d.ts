import { Listing } from "../typings/interfaces";
import { CategorizedListingOptions } from "../typings/types";
/**
 * Fetches listings.
 * @param {CategorizedListingOptions} options
 * @returns {Promise<Listing[]>}
 */
export declare function getListings(options?: CategorizedListingOptions): Promise<Listing[]>;
