import { PageFetchOptions, PageScrollerOptions } from "../typings/interfaces";
import { Page } from "../typings/types";
export default class DevToClient {
    private readonly links;
    private readonly options;
    static readonly clientDefaults: PageScrollerOptions;
    static readonly fetchDefaults: Pick<PageFetchOptions, 'page'>;
    constructor(options?: Partial<PageScrollerOptions>);
    fetchPages(options?: Partial<PageFetchOptions>): Promise<Page>;
}
