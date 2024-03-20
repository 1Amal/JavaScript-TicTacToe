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
                gameMemory.gameStatus.turnNo=0;
                gameMemory.gameStatus.lastTurn="aiBot";
  
            }

            else if (gameMemory.gameStatus.lastTurn==="aiBot")
            {

                    console.log(gameMemory.playerDetails.playerName +"'s Turn");
                    // playerChoice=prompt("Please Enter Grid number between 0-9: ")
                    
                    // if (gameMemory.gameStatus.gameBoard[playerChoice]==="null")
                    // {
                    //     console.log("Null Array position, so safe to store player choice");
                    //     gameMemory.gameStatus.gameBoard[playerChoice]=gameMemory.playerDetails.playerName;
                    //     gameMemory.gameStatus.turnNo+=1;
                    // }

                    // else{
                    //     console.log("Error Array not empty, so not safe to store player input");
                    //     // playerChoice=prompt("Please Enter Grid number between 0-9: ");

                    // }

                    gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;
                    gameMemory.gameStatus.turnNo+=1;


            }

            else if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
            {
                console.log("aiBot's Turn");
                gameMemory.gameStatus.lastTurn="aiBot";
                gameMemory.gameStatus.turnNo+=1;

                // const randomAi=gameLogic();
                // console.log(randomAi.randomChoice(9));

                // gameMemory.gameStatus.gameBoard.push("aiBot");
                // playRound.aiBot();

            }
    }


        return {playGame};
    

    } 

    function randomChoice(minVal, maxVal)
    {
        var randomNumber=Math.round(minVal+(Math.random()*(maxVal-minVal)));
        return {randomChoice, randomNumber}

    }    

    function checkGameBoard(indexNo)
    {
       let currentGameMemory= gameMemory.gameStatus.gameBoard;
       let indexNoStatus=(gameMemory.gameStatus.gameBoard[indexNo]==="null");
       console.log("Is gameBoard Index empty? " + indexNoStatus);

        return {checkGameBoard, currentGameMemory,indexNo,indexNoStatus}
    }
    
    function aiBot()
    {
        let nextChoice=randomChoice(0,9).randomNumber;
        console.log("NextChoice Variable :" + nextChoice);
             
        if(gameMemory.gameStatus.gameBoard[nextChoice]==="null")
        {
         
            console.log("Ok To store");
            gameMemory.gameStatus.gameBoard[nextChoice]="aiBot";
            console.log(gameMemory.gameStatus.gameBoard);
            return;

        }

        else if (gameMemory.gameStatus.gameBoard[nextChoice]===gameMemory.playerDetails.playerName ||
            gameMemory.gameStatus.gameBoard[nextChoice]==="aiBot")
        {
            aiBot();
        }
        
        else
        {
            
            console.log("Not ok to store");
           
        }

  

        return {aiBot}
    }

    function playerTurn(playerChoice)
    {
        console.log(playerChoice);
        gameMemory.gameStatus.gameBoard.push(playerChoice);

        return;
    }


    return {randomChoice,aiBot,playerTurn,playGame,checkGameBoard} // This will return the Factory functions


}

// *.*.*.*.*.*.*.*.*.*. Game Memory *.*.*.*.*.*.*.*.*.*.

const gameMemory= (function ()
{
    //Variable for Player
    const playerDetails={playerName:"",
                         playerMarker:"X",
                         playerWins:0,
        
                        }

    //Variables for aiBot
    const aiBotDetails={
                        aiBotName:"aiBot",
                        aiBotWins:0,

                        }
 
    const gameStatus=  {lastTurn:"New",
                        turnNo:0,
                        playerTurns:[],
                        aiBotTurns:[],
                        gameBoard:["null","null","null","null","null","null","null","null","null"],
                        }

    return {playerDetails,aiBotDetails, gameStatus}
})();


// *.*.*.*.*.*.*.*.*.*. Display Controller *.*.*.*.*.*.*.*.*.*.

const displayController= (function (displayThis)
{
    const consoleOut=console.log("Output From Display Controller: " + displayThis);
    return {consoleOut};

});

const playRound=gameLogic();
// playRound.playGame();

console.log(gameMemory);
