/* Amal K. 2024 March 
Tic Tac Toe Game
*/

// *.*.*.*.*.*.*.*.*.*. Game Logic *.*.*.*.*.*.*.*.*.*.

const gameLogic =function ()
{


    // function gameStart(start)
    // {

    //     if (gameMemory.gameStatus.roundNo>=1 && gameMemory.gameStatus.roundNo<9)
    //         {
    //             console.log("Welcome to next turn");
    //             gameMemory.gameStatus.roundNo+=1;//Advance the round no by 1
    //             console.log(gameMemory.gameStatus.roundNo);
    //             gameMemory.gameStatus.gameBoard=[]; // Empty the array
    //             console.log(gameMemory.gameStatus.gameBoard);


    //         }
        
    //     else if(gameMemory.gameStatus.roundNo>=9)
    //     {
    //         console.log("Game Over")
    //     }
        
    //     else{
    //         console.log("Game has not been run Please input your Name ");

    //         // gameMemory.playerDetails.playerName=prompt();
    //         gameMemory.gameStatus.roundNo=+1;
    //         console.log(gameMemory.playerDetails.playerName);
    //         gameMemory.gameStatus.gameBoard=[]; // Empty the array
    //         gameMemory.gameStatus.gameBoard.splice(1, 1,"hello")


    //         console.log(gameMemory.gameStatus.gameBoard);
    //     }

    //     return {gameStart}
    // }

    function randomChoice()
    {
        let randomNumber=Math.floor(Math.random()*2);
        return {randomNumber}

    }    

    function nextTurn()
    {
        if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
        {
            // return gameMemory.playerDetails.playerName;
            let playerTurn="PlayerTurn"
            return playerTurn;
        }

        else if (gameMemory.gameStatus.lastTurn==="AiBot")
        {
            console.log("Last Turn by AiBot");
            return "AiBot"

        }

        else
        {
            return console.log("Invalid")
        }

        return {playerTurn}
    

    } 

    function aiBot()
    {
        const random1=gameLogic;
        const numberIs=random1.randomChoice;
        gameMemory.gameStatus.gameBoard[0];
        return {numberIs}
    }

    function playerTurn(playerChoice)
    {
        console.log("It's my life");
        gameMemory.gameStatus.gameBoard.push(playerChoice);
        return;
    }

    // displayController;

    return{randomChoice,aiBot, nextTurn,playerTurn} // This will return the Factory functions


}

// *.*.*.*.*.*.*.*.*.*. Game Memory *.*.*.*.*.*.*.*.*.*.

const gameMemory= (function ()
{
    //Variable for Player
    const playerDetails={playerName:"",
                         playerMarker:"X",
                         playerWins:0,
        
                        }

    //Variables for AiBot
    const aiBotDetails={
                        aiBotName:"AiBot",
                        aiBotWins:0,

                        }
 
    const gameStatus=    {lastTurn:"",
                        playerTurns:[],
                        aiBotTurns:[],
                        roundNo:0,
                        gameBoard:[],
                        }

    return {playerDetails,aiBotDetails, gameStatus}
})();


// *.*.*.*.*.*.*.*.*.*. Display Controller *.*.*.*.*.*.*.*.*.*.

const displayController= (function (displayThis)
{
    // return (console.log(gameMemory));
    const consoleOut=console.log("Output From Display Controller: " + displayThis);
    return {consoleOut};


});


const player1=gameLogic();
// player1.gameStart();

gameMemory.gameStatus.lastTurn="Amal";
gameMemory.playerDetails.playerName="Amal";
console.log(gameMemory.playerDetails.playerName);

// gameMemory.gameStatus.lastTurn='Amal2';
// gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;

// console.log(gameMemory.gameStatus.lastTurn);
displayController(gameMemory.gameStatus.lastTurn);

player1.nextTurn;

player1.playerTurn("Xdsds");

console.log(gameMemory);
