import { PageFetchOptions } from "../typings/interfaces";
import { Page } from "../typings/types";
export default function fetchPages(options?: Partial<PageFetchOptions>): Promise<Page>;
