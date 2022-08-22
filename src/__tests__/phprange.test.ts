import { inclusiveRange, exclusiveRange, countedRange } from "../phprange";

const s = JSON.stringify;

test("Inclusive", () => {
    expect(s(inclusiveRange(2,12,3))).toBe(s([2,5,8,11]));
    expect(s(inclusiveRange(1,10))).toBe(s([1,2,3,4,5,6,7,8,9,10]));
});
test("Exclusive", () => {
    expect(s(exclusiveRange(2,11,3))).toBe(s([2,5,8]));
    expect(s(exclusiveRange(1,10))).toBe(s([1,2,3,4,5,6,7,8,9]));
});
test("Counted", () => {
    expect(s(countedRange(2,12,1))).toBe(s([2,3,4,5,6,7,8,9,10,11,12,13]));
    expect(s(countedRange(2,10,2))).toBe(s([2,4,6,8,10,12,14,16,18,20]));
});