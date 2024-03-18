/* Amal K. 2024 March 
Tic Tac Toe Game
*/

// *.*.*.*.*.*.*.*.*.*. Game Logic *.*.*.*.*.*.*.*.*.*.



const gameLogic =function ()
{
    

    const playGame= function ()
    {
        let playerChoice;

        while (gameMemory.gameStatus.turnNo<9){
        

        
            if (gameMemory.gameStatus.lastTurn==="New")
            {
                gameMemory.playerDetails.playerName=prompt("Please Enter Your Name");
                gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;
                gameMemory.gameStatus.gameBoard=[];
  
            }

            else if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
            {

                console.log(gameMemory.playerDetails.playerName +"'s Turn");
                playerChoice=prompt("Please Enter Grid number between 0-9: ")
                
                if (gameMemory.gameStatus.gameBoard[playerChoice]===undefined)
                {
                    console.log("Null Array position");
                    gameMemory.gameStatus.gameBoard[playerChoice]=gameMemory.playerDetails.playerName;
                    gameMemory.gameStatus.turnNo++;
                }

                else{
                    console.log("Error Array not empty");
                    playerChoice=prompt("Please Enter Grid number between 0-9: ");

                }

                gameMemory.gameStatus.lastTurn="AiBot";


            }

            else if (gameMemory.gameStatus.lastTurn==="AiBot")
            {
                console.log("Turn by AiBot");
                gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;
                gameMemory.gameStatus.turnNo++;

                // const randomAi=gameLogic();
                // console.log(randomAi.randomChoice(9));

                gameMemory.gameStatus.gameBoard.push("AiBot");


                

            }
    }


        return {playGame,};
    

    } 

    function randomChoice(minVal, maxVal)
    {
        var randomNumber=Math.round(minVal+(Math.random()*(maxVal-minVal)));
        return {randomNumber}

    }    

    
    function aiBot()
    {
        const nextChoice=randomChoice(0,9);
        console.log(nextChoice);
   
        return {aiBot}
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
// playRound1.playGame();

console.log(gameMemory);
