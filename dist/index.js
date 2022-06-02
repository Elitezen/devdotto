"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._request = exports._camelCaseConvert = exports.fetchArticles = void 0;
var fetchArticles_1 = require("./src/functions/fetchArticles");
exports.fetchArticles = fetchArticles_1.default;
var _camelCaseConvert_1 = require("./src/functions/_camelCaseConvert");
exports._camelCaseConvert = _camelCaseConvert_1.default;
var _request_1 = require("./src/functions/_request");
exports._request = _request_1.default;
(0, fetchArticles_1.default)()
    .then(console.log);
