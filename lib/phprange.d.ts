/**
 * Inclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be less OR EQUAL to max
 * @param {number} min The starting value of the range
 * @param {number} max The highest possible value IN the range (inclusive maximum)
 * @param {number} stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
export declare const range: (min: number, max: number, stepsize?: number) => number[];
/**
 * Exclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be LESS than max
 * @param {number} infimum The starting value of the range
 * @param {number} supremum The smallest possible value AFTER the highest value of the range (exclusive maximum)
 * @param {number} stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
export declare const exclusiveRange: (infimum: number, supremum: number, stepsize?: number) => number[];
/**
 * Range function that starts with `start` and goes in `stepsize`. The resulting array will contain `count` elements
 * @param {number} start The starting value of the range
 * @param {number} count The number of elements
 * @param {number} stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
export declare const countedRange: (start: number, count: number, stepsize?: number) => number[];
export declare const inclusiveRange: (min: number, max: number, stepsize?: number) => number[];
declare const _default: {
    range: (min: number, max: number, stepsize?: number) => number[];
    inclusiveRange: (min: number, max: number, stepsize?: number) => number[];
    exclusiveRange: (infimum: number, supremum: number, stepsize?: number) => number[];
    countedRange: (start: number, count: number, stepsize?: number) => number[];
};
export default _default;
