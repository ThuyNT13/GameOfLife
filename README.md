Beta-tested [WickedlySmart's projects](http://www.wickedlysmart.com/projects/) so I got to have fun with algorithms and data structures in the **Game of Life** (not the Hasbro board game). When mathematician John Horton Conway introduced his game, a whole new field of mathematical research was born, _cellular automata_.

The Game of Life consists of a two-dimensional grid of cells, each of whose state is either _live_ (on) or _dead_ (off). As a zero-player game, the evolution of the game progresses dependent upon the state of the _neighbors_ of a particular cell. The rules that dictate whether or not a cell lives or dies are as follows:
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1. Birth**: if the current cell is _dead_ and the count is _3 neighbors_, it is switched on to _live_.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2. Survival**: if the current cell is _live_ and the count is _2 or 3 neighbors_, the state is left unchanged.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**3. Death**: if the current cell is _live_ and the neighbor count is less than 2 (__underpopulation__) or greater than 3 (__overpopulation__), it is switched off to _dead_.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*\* __Neighbors__ are any cells that are horizontally, vertically or diagonally adjacent to a particular cell.

To start the game, the board needs to be `seeded` with _initial patterns_ for the program to have something to work with. This is the first generation of the game. The challenge is to find intial [patterns](http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Patterns) that will generate life indefinitely, or at least for as many generations as possible. This is _the original Sim game_ to test your ability to find the key to the survival of the fittest. 

Ten consecutive _live_ cells in a row (horizontally) or in a column (vertically) produces a momentary explosion of life. The _glider_ crawls along a diagonal path across the grid. And then there's the [_Glider Gun_](http://www.conwaylife.com/wiki/Gun).

## Next Steps

1. D3.js!

2. consider adding color to further "stages of life".

3. add buttons to select algorithmic patterns

4. button to slowly step-through generations

5. find a way to add patterns to board
