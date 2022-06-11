/**
 * @class For DEV API errors.
 */
export default class DEVError extends Error {
    constructor(message: string, status: number);
}
