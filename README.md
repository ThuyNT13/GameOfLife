Beta-tested [WickedlySmart's projects](http://www.wickedlysmart.com/projects/) so I got to have fun with algorithms and data structures in the **Game of Life** (not the Hasbro board game). When mathematician John Horton Conway introduced his game, a whole new field of mathematical research was born, _cellular automata_.

The game is a grid of cells which are either _live_ (on) or _dead_ (off). Each generation switches cells on or off depending on the state of the cells that surround it -- its neighbors.

**1. Birth**: if the current cell is _dead_ and the count is _3 neighbors_, it is switched on to _live_.

**2. Survival**: if the current cell is _live_ and the count is _2 or 3 neighbors_, the state is left unchanged.

**3. Death**: if the current cell is _live_ and the neighbor count is _less than 2_ (underpopulation) or _greater than 3_ (overpopulation), it is switched off to _dead_.

The challenge is to find [patterns](http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Patterns) that will generate life. Ten cells in a row (or column) produces an explosion of life. A favorite is the glider which crawls on a diagonal path across the grid to the other side. And then there's the [Glider Gun](http://www.conwaylife.com/wiki/Gun).

## Next Steps

1. D3.js!

2. consider adding color to further "stages of life".

3. add buttons to select algorithmic patterns
