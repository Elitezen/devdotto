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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoArticles = exports.getLatestArticles = exports.getArticleByPath = exports.getArticleById = exports.getArticles = void 0;
const DEVUtil_1 = require("../structures/DEVUtil");
const { request, parseParameters } = DEVUtil_1.default;
/**
* Fetches a page of articles.
* @param {Partial<PageFetchOptions>} options Describes the target articles.
* @returns {Promise<Page>} An array of articles.
*/
function getArticles(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = parseParameters(options);
        return yield request(`/articles${query}`);
    });
}
exports.getArticles = getArticles;
/**
 * Fetches an article by it's id.
 * @param {NumberResolvable} id The article's id.
 * @returns {Promise<Article>}
 */
function getArticleById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield request(`/articles/${id}`);
    });
}
exports.getArticleById = getArticleById;
/**
 * Fetches an article by it's username/slug path.
 * @param {string} publisherName The name of the user or organization.
 * @param {string} slug The article's slug.
 * @returns {Promise<Article>} The article.
 */
function getArticleByPath(publisherName, slug) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield request(`/articles/${publisherName}/${slug}`);
    });
}
exports.getArticleByPath = getArticleByPath;
/**
 * Fetches the newest articles.
 * @param {BaseFetchPageOptions} options
 * @returns {Promise<Page<Article>>} An array of articles
 */
function getLatestArticles(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = parseParameters(options);
        return request(`/articles/latest${query}`);
    });
}
exports.getLatestArticles = getLatestArticles;
/**
 * Fetches video articles.
 * @param {BaseFetchPageOptions} options
 * @returns {Promise<Page<VideoArticle>>} An array of articles
 */
function getVideoArticles(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = parseParameters(options);
        return request(`/videos${query}`);
    });
}
exports.getVideoArticles = getVideoArticles;
