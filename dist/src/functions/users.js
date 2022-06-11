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
exports.getUserById = void 0;
const DevDotToUtil_1 = require("../structures/DevDotToUtil");
const { request } = DevDotToUtil_1.default;
/**
 * Fetches a DEV user by their id.
 * @param {NumberResolvable} id The user's id.
 * @returns {Promise<User>}
 */
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield request(`/users/${id}`);
    });
}
exports.getUserById = getUserById;
