Beta-tested [WickedlySmart's projects](http://www.wickedlysmart.com/projects/) so I got to have fun with algorithms and data structures in the **Game of Life** (not the Hasbro board game). When mathematician John Horton Conway introduced his game, a whole new field of mathematical research was born, _cellular automata_.

The Game of Life consists of a two-dimensional grid of cells, each of whose state is either _live_ (on) or _dead_ (off). As a zero-player game, the evolution of the game progresses dependent upon the state of the _neighbors_ of a particular cell.
 A _neighbor_ constitutes all the cells that are horizontally, vertically and diagonally adjacent to the cell.
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1. Birth**: if the current cell is _dead_ and the count is _3 neighbors_, it is switched on to _live_.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2. Survival**: if the current cell is _live_ and the count is _2 or 3 neighbors_, the state is left unchanged.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**3. Death**: if the current cell is _live_ and the neighbor count is _less than 2_ (underpopulation) or _greater than 3_ (overpopulation), it is switched off to _dead_.

The challenge is to find starter [patterns](http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Patterns) that will generate life, indefinitely. Ten consecutive _live_ cells in a row (horizontally) or in a column (vertically) produces a momentary explosion of life. A favorite is the glider which crawls on a diagonal path across the grid to the other side. And then there's the [Glider Gun](http://www.conwaylife.com/wiki/Gun).

## Next Steps

1. D3.js!

2. consider adding color to further "stages of life".

3. add buttons to select algorithmic patterns

4. button to slowly step-through generations
