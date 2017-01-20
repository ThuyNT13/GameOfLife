Each generation switches cells on or off depending on the state of the cells that surround it.

1. **Death**: if the count is less than 2 or greater than 3 neighbors, the current cell is switched off.

2. **Survival**: if (a) the count is exactly 2 neighbors, or (b) the count is exactly 3 neighbors and the current cell is on, the current cell is left unchanged.

3. **Birth**: if the current cell is off and the count is exactly 3 neighbors, the current cell is switched on.

from [MathWorld](http://mathworld.wolfram.com)
