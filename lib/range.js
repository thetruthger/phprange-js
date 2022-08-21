"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.counted_range = exports.exclusive_range = exports.inclusive_range = void 0;
//@ts-check
/**
 * Inclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be less OR EQUAL to max
 * @param min The starting value of the range
 * @param max The highest possible value IN the range (inclusive maximum)
 * @param stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
const inclusive_range = (min, max, stepsize = 1) => [
    ...Array(Math.ceil((max - min + 1) / stepsize))
        .keys()
]
    .map(x => stepsize * x + min);
exports.inclusive_range = inclusive_range;
/**
* Exclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be LESS than max
* @param infimum The starting value of the range
* @param supremum The smallest possible value AFTER the highest value of the range (exclusive maximum)
* @param stepsize The Stepsize of the resulting array
* @returns {number[]} an array of numbers representing the range values
*/
const exclusive_range = (infimum, supremum, stepsize = 1) => [
    ...Array(Math.ceil((supremum - infimum) / stepsize))
        .keys()
]
    .map(x => stepsize * x + infimum);
exports.exclusive_range = exclusive_range;
/**
* Range function that starts with `start` and goes in `stepsize`. The resulting array will contain `count` elements
* @param start The starting value of the range
* @param count The number of elements
* @param stepsize The Stepsize of the resulting array
* @returns {number[]} an array of numbers representing the range values
*/
const counted_range = (start, count, stepsize = 1) => [...Array(count).keys()]
    .map(x => stepsize * x + start);
exports.counted_range = counted_range;
exports.range = exports.inclusive_range;
exports.default = { inclusive_range: exports.inclusive_range, exclusive_range: exports.exclusive_range, counted_range: exports.counted_range, range: exports.range };
//# sourceMappingURL=range.js.map