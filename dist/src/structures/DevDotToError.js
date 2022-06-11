"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class For DEV API errors.
 */
class DevDotToError extends Error {
    constructor(message, status) {
        super(message);
        this.name = `DevDotToError [${status}]`;
    }
}
exports.default = DevDotToError;
