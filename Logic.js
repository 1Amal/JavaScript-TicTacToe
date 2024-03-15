/* Amal K. 2024 March 
Tic Tac Toe Game
*/

// *.*.*.*.*.*.*.*.*.*. Game Logic *.*.*.*.*.*.*.*.*.*.



const gameLogic =function ()
{
    

    const playGame= function ()
    {
        // console.log('Welcome');

        while (gameMemory.gameStatus.turnNo<=9){
        gameMemory.gameStatus.turnNo++;

        
            if (gameMemory.gameStatus.lastTurn==="New")
            {
                gameMemory.playerDetails.playerName=prompt("Please Enter Your Name");
                gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;
                gameMemory.gameStatus.gameBoard=[];
  
            }

            else if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
            {

                console.log(gameMemory.playerDetails.playerName +"'s Turn");
                let playerChoice=prompt("Please Enter Grid number between 0-9: ")
                gameMemory.gameStatus.gameBoard[playerChoice]=gameMemory.gameStatus.gameBoard.push(gameMemory.playerDetails.playerName);
                gameMemory.gameStatus.lastTurn="AiBot";


            }

            else if (gameMemory.gameStatus.lastTurn==="AiBot")
            {
                console.log("Last Turn by AiBot");
                gameMemory.gameStatus.gameBoard.push("AiBot");
                gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;

            }
    }
        // playGame();

        return {playGame,};
    

    } 

    function randomChoice(randomLimit)
    {
        let randomNumber=Math.floor(Math.random()*randomLimit);
        return {randomLimit,randomNumber}

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


    return {randomChoice,aiBot,playerTurn,playGame} // This will return the Factory functions


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
 
    const gameStatus=  {lastTurn:"New",
                        turnNo:0,
                        playerTurns:[],
                        aiBotTurns:[],
                        gameBoard:[],
                        }

    return {playerDetails,aiBotDetails, gameStatus}
})();


// *.*.*.*.*.*.*.*.*.*. Display Controller *.*.*.*.*.*.*.*.*.*.

const displayController= (function (displayThis)
{
    const consoleOut=console.log("Output From Display Controller: " + displayThis);
    return {consoleOut};

});

const playRound1=gameLogic();
playRound1.playGame();

console.log(gameMemory);
