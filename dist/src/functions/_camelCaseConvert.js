"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _camelCaseConvert(obj) {
    var newObj = {};
    var entries = Object.entries(obj);
    entries.forEach(function (ent) {
        var key = ent[0], value = ent[1];
        if (key.includes('_')) {
            key = key
                .split('_')
                .map(function (str, i) {
                if (i === 0)
                    return key.split('_')[0];
                return str[0].toUpperCase() + str.slice(1);
            })
                .join('');
        }
        newObj[key] = typeof value == 'object' && value !== null && !Array.isArray(value) ? _camelCaseConvert(value) : value;
    });
    return newObj;
}
exports.default = _camelCaseConvert;
