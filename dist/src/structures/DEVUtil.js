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
const DEVError_1 = require("./DEVError");
const DEVUtil = {
    camelCaseKeys: function (obj) {
        if (obj === undefined)
            throw new TypeError('A valid object must be provided');
        let newObj = {};
        const entries = Object.entries(obj);
        entries.forEach(ent => {
            let [key, value] = ent;
            if (key.includes('_')) {
                key = key
                    .split('_')
                    .map((str, i) => {
                    if (i === 0)
                        return key.split('_')[0];
                    return str[0].toUpperCase() + str.slice(1);
                })
                    .join('');
            }
            newObj[key] = this.isObject(value) ? this.camelCaseKeys(value) : value;
        });
        return newObj;
    },
    isObject(arg) {
        return typeof arg == 'object' && arg !== null && !Array.isArray(arg);
    },
    parseParameters(options) {
        let params = '';
        if (options) {
            const parsedOptions = DEVUtil.snakeCaseKeys(options);
            params += `?${new URLSearchParams(parsedOptions).toString()}`;
        }
        return params;
    },
    request(path, camelCaseParse = true, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const defaultParams = {
                method: 'GET'
            };
            const baseLink = 'https://dev.to/api';
            try {
                const req = yield fetch(baseLink + path, params || defaultParams);
                const response = yield req.json();
                const errorResponse = (response.error && response) || false;
                if (errorResponse)
                    throw errorResponse;
                const data = response;
                if (camelCaseParse === false)
                    return data;
                const finalData = data instanceof Array
                    ? data.map(article => DEVUtil.camelCaseKeys(article))
                    : DEVUtil.camelCaseKeys(data);
                return finalData;
            }
            catch (err) {
                const e = err;
                throw new DEVError_1.default(e.error, e.status);
            }
        });
    },
    snakeCaseKeys: function (obj) {
        if (obj === undefined)
            throw new TypeError('A valid object must be provided');
        let newObj = {};
        const entries = Object.entries(obj);
        entries.forEach(e => {
            let [key, value] = e;
            const letters = key.split('');
            letters.forEach((l, i) => {
                if (l == l.toUpperCase()) {
                    letters[i] = `_${l.toLowerCase()}`;
                }
                else
                    return l;
            });
            key = letters.join('');
            newObj[key] = DEVUtil.isObject(value) ? this.snakeCaseKeys(value) : value;
        });
        return newObj;
    },
};
exports.default = DEVUtil;
