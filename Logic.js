/* Amal K. 2024 March 
Tic Tac Toe Game
*/

// *.*.*.*.*.*.*.*.*.*. Game Logic *.*.*.*.*.*.*.*.*.*.



const gameLogic =function ()
{
    playGame();

    function playGame()
    {
        // console.log('Welcome');

        if (gameMemory.gameStatus.lastTurn==="New")
        {
            console.log("Game First Run" + (gameMemory.playerDetails.playerName) + "What");
            gameMemory.playerDetails.playerName=prompt("Please Enter Your Name");
            gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;
            gameLogic();

        }
        else if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
        {
            // return gameMemory.playerDetails.playerName;
            let playerTurn="PlayerTurn"
            console.log(gameMemory.playerDetails.playerName +"'s Turn");
            // return playerTurn;
        }

        else if (gameMemory.gameStatus.lastTurn==="AiBot")
        {
            console.log("Last Turn by AiBot");
            // return "AiBot"

        }

        else
        {
            console.log("Invalid")
        }

        return {playGame}
    

    } 


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

    function randomChoice(randomLimit)
    {
        let randomNumber=Math.floor(Math.random()*randomLimit);
        return {randomNumber}

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
        console.log(playerChoice);
        gameMemory.gameStatus.gameBoard.push(playerChoice);
        return;
    }

    // displayController;

    return{randomChoice,aiBot,playerTurn} // This will return the Factory functions


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
 
    const gameStatus=    {lastTurn:"New",
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
gameLogic();
// const player1=gameLogic();
// const AiBot1=gameLogic();
// player1.gameStart();

// gameMemory.gameStatus.lastTurn="Amal";
// gameMemory.playerDetails.playerName="Amal";


// displayController(gameMemory.gameStatus.lastTurn);

console.log(gameMemory);

// alert (player1.randomChoice(33));
