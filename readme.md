# phprange-JS

This module provides inclusive and exclusive range function to use in any project inspired by the php range() function

## Examples

### Inclusive Range
```ts
import {range} from "phprange";

for(const i of range(0,9))
{
    console.log(i);
}
// Outputs the numbers 0 to 9

for(const j of range(1,10,3))
{
    console.log(i);
}
Outputs: 1, 4, 7, 10
```

### Exclusive Range
```ts
import {exclusiveRange as range} from "phprange";
for(const i of range(0,9))
{
    console.log(i);
}
// Outputs the numbers 0 to 8 since 9 ist the exclusive end of the range

for(const j of range(1,10,3))
{
    console.log(i);
}
// Outputs: 1, 4, 7
// Starts at 1, goes to the last number that is lower than 10 in a stepsize of 3
```

### Counted Range
```ts
import {countedRange as range} from "phprange";
for(const i of range(2,9,2))
{
    console.log(i);
}
// 2, 4, 6, 8, 10, 12, 14, 16, 18
// Starts at 2 and goes in the stepsize of 2 until the array contains a total of 9 Elements

for(const j of range(2,3,4))
{
    console.log(i);
}
// Outputs: 2, 5, 8, 11
```
