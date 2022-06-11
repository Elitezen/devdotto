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
exports.getCommentById = exports.getArticleComments = void 0;
const DEVUtil_1 = require("../structures/DEVUtil");
const { request, parseParameters } = DEVUtil_1.default;
/**
 * Fetches the comments of an article.
 * @param {ArticleIdentifierOptions | PodcastIdentifierOptions} id The id of the article or podcast.
 * @returns {Promise<Comment[]>}
 */
function getArticleComments(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = parseParameters(id);
        return yield request(`/comments${query}`);
    });
}
exports.getArticleComments = getArticleComments;
/**
 * Fetches a comment by it's id.
 * @param {NumberResolvable} id
 * @returns {Promise<Comment>}
 */
function getCommentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield request(`/comments/${id}`);
    });
}
exports.getCommentById = getCommentById;
