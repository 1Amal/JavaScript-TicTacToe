/* Amal K. 2024 March 
Tic Tac Toe Game
*/

// *.*.*.*.*.*.*.*.*.*. Game Logic *.*.*.*.*.*.*.*.*.*.



const gameLogic =function ()
{
    
    const playGame= function ()
    {
//This While loop will run for nine times
        while (gameMemory.gameStatus.turnNo<=9){
        
            if (gameMemory.gameStatus.lastTurn==="New")
            {
                gameMemory.gameStatus.gameBoard=["null","null","null","null","null","null","null","null","null"];
                gameMemory.gameStatus.turnNo=0;
                gameMemory.gameStatus.lastTurn="aiBot";

                // gameMemory.playerDetails.playerName=prompt("Please Enter Your Name");
                displayController("New");
  

  
            }
// This will run the function to get Players input
            else if (gameMemory.gameStatus.lastTurn==="aiBot") 
            {
                gameMemory.gameStatus.turnNo+=1;
                console.log(gameMemory.gameStatus.turnNo);    
                playRound.player();
                    
            }
//This will run the function to generate aiBot response
            else if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
            {
                console.log("aiBot's Turn");
                gameMemory.gameStatus.lastTurn="aiBot";
                gameMemory.gameStatus.turnNo+=1;
                console.log(gameMemory.gameStatus.turnNo);  
                playRound.aiBot();

            }
    }
        return {playGame};
    

    } 


//Function to generate a random Number that is used in making random choices by aiBot
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
  
// Logic for player to input choice
    function player()
    {
        let playerChoice;

        console.log(gameMemory.playerDetails.playerName +"'s Turn");
        
        playerChoice=prompt("Please Enter Grid number between 0-9: ");
        console.log("Players Choice of Gameboard Index is: " + playerChoice);
                    
        if (gameMemory.gameStatus.gameBoard[playerChoice]==="null")
            {
                console.log("Null Array position, so safe to store player choice");
                gameMemory.gameStatus.gameBoard[playerChoice]=gameMemory.playerDetails.playerName;
                // gameMemory.gameStatus.turnNo+=1;
                gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;
                return;
                // playRound.playGame();
            }

        else if (gameMemory.gameStatus.gameBoard[playerChoice]==="aiBot" || gameMemory.playerDetails.playerName)
            {
                console.log("Error Array not empty, so not safe to store player input, please try again");
                // playerChoice=prompt("Please Enter Grid number between 0-9: ");
                player();

            }

            playRound.playGame(); // Return to original function

    }

//Logic for aiBot
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

  
        // playRound.playGame();
        return {aiBot}
    }

    function playerTurn(playerChoice)
    {
        console.log(playerChoice);
        gameMemory.gameStatus.gameBoard.push(playerChoice);

        return;
    }


    return {randomChoice,aiBot,playerTurn,playGame,checkGameBoard,player} // This will return the Factory functions


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
                        gameBoard:[],
                        }

    return {playerDetails,aiBotDetails, gameStatus}
})();


// *.*.*.*.*.*.*.*.*.*. Display Controller *.*.*.*.*.*.*.*.*.*.

const displayController= (function (displayThis)
{
    let consoleOut;
   
    switch (displayThis)
    {
        case "New":
            consoleOut=console.log("Output From Display Controller: " + displayThis);
            gameMemory.playerDetails.playerName=prompt("Please Enter Your Name");

            break;
        
        case 1:
            
            consoleOut=console.log("Output From Display Controller: " + displayThis);

            break;
    }
    
            // return {consoleOut};


});

const playRound=gameLogic();
// playRound.playGame();

console.log(gameMemory);
