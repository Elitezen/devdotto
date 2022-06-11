"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class For DEV API errors.
 */
class DEVError extends Error {
    constructor(message, status) {
        super(message);
        this.name = `DEVError [${status}]`;
    }
}
exports.default = DEVError;
