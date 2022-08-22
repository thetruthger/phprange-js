// @ts-check
/**
 * Inclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be less OR EQUAL to max
 * @param min The starting value of the range
 * @param max The highest possible value IN the range (inclusive maximum)
 * @param stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
 export const inclusiveRange = (min:number,max:number,stepsize:number=1):number[] =>
 [
     ...Array(
         Math.ceil(
             (max-min+1)/stepsize
         )
     )
     .keys()
 ]
 .map(
     x => stepsize*x + min
 );


/**
 * Exclusive range function that starts with `min` and goes in `stepsize`. The highest number will be the minimum plus the greatest multiple of the stepsize to be LESS than max
 * @param infimum The starting value of the range
 * @param supremum The smallest possible value AFTER the highest value of the range (exclusive maximum)
 * @param stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
export const exclusiveRange = (infimum:number,supremum:number,stepsize:number=1):number[] =>
[
    ...Array(
        Math.ceil(
            (supremum-infimum)/stepsize
        )
    )
    .keys()
]
.map(
    x => stepsize*x + infimum
);


/**
 * Range function that starts with `start` and goes in `stepsize`. The resulting array will contain `count` elements
 * @param start The starting value of the range
 * @param count The number of elements
 * @param stepsize The Stepsize of the resulting array
 * @returns {number[]} an array of numbers representing the range values
 */
export const countedRange = (start:number,count:number,stepsize:number=1):number[] =>
[ ...Array(count).keys() ]
.map(
    x => stepsize*x + start
);

export const range = inclusiveRange;

export default {inclusiveRange, exclusiveRange, countedRange, range};
