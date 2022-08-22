"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inclusiveRange = exports.countedRange = exports.exclusiveRange = exports.range = void 0;
// @ts-check
/**
 * Inclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be less OR EQUAL to max
 * @param {number} min The starting value of the range
 * @param {number} max The highest possible value IN the range (inclusive maximum)
 * @param {number} stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
const range = (min, max, stepsize = 1) => [
    ...Array(Math.ceil((max - min + 1) / stepsize))
        .keys()
]
    .map(x => stepsize * x + min);
exports.range = range;
/**
 * Exclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be LESS than max
 * @param {number} infimum The starting value of the range
 * @param {number} supremum The smallest possible value AFTER the highest value of the range (exclusive maximum)
 * @param {number} stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
const exclusiveRange = (infimum, supremum, stepsize = 1) => [
    ...Array(Math.ceil((supremum - infimum) / stepsize))
        .keys()
]
    .map(x => stepsize * x + infimum);
exports.exclusiveRange = exclusiveRange;
/**
 * Range function that starts with `start` and goes in `stepsize`. The resulting array will contain `count` elements
 * @param {number} start The starting value of the range
 * @param {number} count The number of elements
 * @param {number} stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
const countedRange = (start, count, stepsize = 1) => [...Array(count).keys()]
    .map(x => stepsize * x + start);
exports.countedRange = countedRange;
exports.inclusiveRange = exports.range;
exports.default = { range: exports.range, inclusiveRange: exports.inclusiveRange, exclusiveRange: exports.exclusiveRange, countedRange: exports.countedRange };
//# sourceMappingURL=phprange.js.map