/* Amal K. 2024 March

***** Tic Tac Toe Game Architecture *****
* Two human players or One Human Player and One AIBot
* Use Object oriented design to create the game and no global variables, store all the the variables inside factories.
* Main goal here is to have as little global code as possible.
* If only a single instance of something is required (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
* Decide on which Objects to store the the relevant logic so code is easily maintainable
* First create a working game on the browser console. Test and after making sure the game work start work on the User interface
* Create a User interface which display game status, input player choices, reset game, add player name, show player score
* "gameBoardObject": Store the gameboard as an array inside of a object called 
* "playerObject": Store players in an object called 
* "gameControlFlow" : Object to control Flow of the game
* "displayController": Object to update the HTML Dom and to received user input

gameControlFlow
* Start Game
* Check for Game score
* Check for Game win
* Check for Game Ties
* Keep track of player and computer Marker (i.e. O X)

gameBoardObject
* Used to store the player positions in an array
* Assign a 3x3 grid based naming convention for  i.e. Rows:1 2 3 Columns:4 5 6
* Get the position player has selected and store the value as two values of Row number and column number i.e. [1, 4, X] with the Marker

playerObject
* Used to store the Player name, Score in an array
* Create new players
* Delete players

Tic Tac Toe Board Coordinates

    -------------------------
    |       |       |       |
6       1,6     2,6     3,6
    -------------------------
    |       |       |       |
5       1,5     2,5     3,5
    -------------------------
    |       |       |       |
4       1,4     2,4     3,4
    -------------------------
        1       2       3

*

displayController
* Receive input from the player
* Display game status on the display
* Button to change name
* Button to Restart game
* Game result display element



Pseudo Code

*/



