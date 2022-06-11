/**
 * @class For DEV API errors.
 */
export default class DevDotToError extends Error {
    constructor(message: string, status: number);
}
