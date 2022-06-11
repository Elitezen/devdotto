"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DevToClient_apiKey;
Object.defineProperty(exports, "__esModule", { value: true });
const DevDotToUtil_1 = require("./DevDotToUtil");
const { request, snakeCaseKeys, parseParameters } = DevDotToUtil_1.default;
/**
 * @class A client for endpoints that require API authentication.
 */
class DevToClient {
    constructor() {
        _DevToClient_apiKey.set(this, null);
        this.me = null;
    }
    /**
     * Assigns an API key to the client for usage. Will also cache your user to DevToClient.me if awaited
     * @param {string} key The API key.
     * @returns
     */
    authorize(key, options) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldSet(this, _DevToClient_apiKey, key, "f");
            if (options === undefined || options.cacheMe === true) {
                this.me = yield this.getMe();
            }
            return this;
        });
    }
    authenticatedRequest(path, method, camelCaseParse = true, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _DevToClient_apiKey, "f") === null)
                throw new TypeError('Your client must be authorized, use DevToClient.authorize(your_api_key)');
            const reqOptions = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': __classPrivateFieldGet(this, _DevToClient_apiKey, "f")
                }
            };
            if (body)
                reqOptions.body = body;
            try {
                const req = yield request(path, camelCaseParse, reqOptions);
                return req;
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * Fetches your articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getMyArticles(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = parseParameters(options);
            return yield this.authenticatedRequest(`/articles/me${query}`, 'GET', true);
        });
    }
    /**
     * Fetches your published articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getMyPublishedArticles(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = parseParameters(options);
            return yield this.authenticatedRequest(`/articles/me/published${query}`, 'GET', true);
        });
    }
    /**
     * Fetches your unpublished articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getMyUnpublishedArticles(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = parseParameters(options);
            return yield this.authenticatedRequest(`/articles/me/unpublished${query}`, 'GET', true);
        });
    }
    /**
     * Fetches all of your articles.
     * @param {BaseFetchPageOptions} options
     * @returns {Promise<Article[]>}
     */
    getAllMyArticles(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = parseParameters(options);
            return yield this.authenticatedRequest(`/articles/me/all${query}`, 'GET', true);
        });
    }
    /**
     * Fetches your followed tags.
     * @returns {Promise<FollowedTags[]>}
     */
    getMyFollowedTags() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authenticatedRequest('/follows/tags', 'GET', true);
        });
    }
    /**
     * Fetches your followers.
     * @param {Partial<SortedPageOptions>} options How many to return and how to sort the followers.
     * @returns {Promise<Follower[]>}
     */
    getMyFollowers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = parseParameters(options);
            return yield this.authenticatedRequest(`/followers/users${query}`, 'GET', true);
        });
    }
    /**
     * Creates a new article under your authentication.
     * @param {NewArticleData} data Your new article's data.
     * @returns {Promise<Article>} The newely created article.
     */
    createArticle(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const finalData = snakeCaseKeys(data);
            const body = JSON.stringify({
                article: finalData
            });
            return yield this.authenticatedRequest('/articles', 'POST', true, body);
        });
    }
    /**
     * Updates one of your articles by it's id.
     * @param {NumberResolvable} id The articles id.
     * @param {NewArticleData} data The new article.
     * @returns {Promise<Article>} The now edited article.
     */
    updateArticleById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const finalData = snakeCaseKeys(data);
            const body = JSON.stringify({
                article: finalData
            });
            return yield this.authenticatedRequest(`/articles/${id}`, 'POST', true, body);
        });
    }
    /**
     * Fetches the authenticator's user.
     */
    getMe() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authenticatedRequest('/users/me', 'GET', true);
        });
    }
}
exports.default = DevToClient;
_DevToClient_apiKey = new WeakMap();
