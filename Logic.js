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
                // playRound.player();
                player();
                    
            }
//This will run the function to generate aiBot response
            else if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
            {
                console.log("aiBot's Turn");
                gameMemory.gameStatus.lastTurn="aiBot";
                gameMemory.gameStatus.turnNo+=1;
                console.log(gameMemory.gameStatus.turnNo);  
                // playRound.aiBot();
                aiBot();

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


  
// Logic for player to input choice
   const player = function ()
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
    const aiBot = function ()
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

    const checkForWinner=function()
    {
        gameMemory.gameStatus.gameBoard=["Amal","Amal","Amal","aiBot","Amal","Amal","aiBot","aiBot","Amal"]; //This is for testing only
        
        const finalGameBoard= displayController("gameBoard"); 

        gameMemory.playerDetails.playerName="Amal"; //This is for testing only



        const playerWin=[gameMemory.playerDetails.playerName,gameMemory.playerDetails.playerName,gameMemory.playerDetails.playerName]; // Player win array for comparison

        console.log(playerWin);

        const aiBotWin=["aiBot","aiBot","aiBot"]; // aiBot win array for comparison


        const winningCondition1=[gameMemory.gameStatus.gameBoard[0],gameMemory.gameStatus.gameBoard[1],gameMemory.gameStatus.gameBoard[2]]; //[0,1,2];
        
        const winningCondition2=[gameMemory.gameStatus.gameBoard[3],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[5]];//[3,4.5];

        const winningCondition3=[gameMemory.gameStatus.gameBoard[6],gameMemory.gameStatus.gameBoard[7],gameMemory.gameStatus.gameBoard[8]];//[6,7,8];

        const winningCondition4=[gameMemory.gameStatus.gameBoard[0],gameMemory.gameStatus.gameBoard[3],gameMemory.gameStatus.gameBoard[6]];//[0,3,6];

        const winningCondition5=[gameMemory.gameStatus.gameBoard[1],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[7]];//[1,4,7];

        const winningCondition6=[gameMemory.gameStatus.gameBoard[2],gameMemory.gameStatus.gameBoard[5],gameMemory.gameStatus.gameBoard[8]];//[2,5,8];

        const winningCondition7=[gameMemory.gameStatus.gameBoard[0],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[8]]; //[0,4,8];

        const winningCondition8=[gameMemory.gameStatus.gameBoard[2],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[6]];//[2,4,6];
        
        console.log(winningCondition1);

        for (let i=0; i<finalGameBoard.length; i++)
        {
            console.log(finalGameBoard[i]);
        }

//Function to compare two arrays
        const compareArrays = (a, b) =>
        a.length === b.length &&
        a.every((element, index) => element === b[index]);

        console.log(compareArrays(playerWin, winningCondition1)); 
        console.log(compareArrays(aiBotWin,winningCondition1));
        
        console.log(compareArrays(playerWin, winningCondition2)); 
        console.log(compareArrays(aiBotWin,winningCondition2)); 

        console.log(compareArrays(playerWin, winningCondition3)); 
        console.log(compareArrays(aiBotWin,winningCondition3)); 

        console.log(compareArrays(playerWin, winningCondition4)); 
        console.log(compareArrays(aiBotWin,winningCondition4)); 
7       
        console.log(compareArrays(playerWin, winningCondition5)); 
        console.log(compareArrays(aiBotWin,winningCondition5)); 

        console.log(compareArrays(playerWin, winningCondition6)); 
        console.log(compareArrays(aiBotWin,winningCondition6)); 

        console.log(compareArrays(playerWin, winningCondition7)); 
        console.log(compareArrays(aiBotWin,winningCondition7)); 

        console.log(compareArrays(playerWin, winningCondition8)); 
        console.log(compareArrays(aiBotWin,winningCondition8)); 

    }

    // function playerTurn(playerChoice)
    // {
    //     console.log(playerChoice);
    //     gameMemory.gameStatus.gameBoard.push(playerChoice);

    //     return;
    // }

    // function checkGameBoard(indexNo)
    // {
    //    let currentGameMemory= gameMemory.gameStatus.gameBoard;
    //    let indexNoStatus=(gameMemory.gameStatus.gameBoard[indexNo]==="null");
    //    console.log("Is gameBoard Index empty? " + indexNoStatus);

    //     return {checkGameBoard, currentGameMemory,indexNo,indexNoStatus}
    // }

    


    return {randomChoice,aiBot,playGame,player,checkForWinner} // This will return the Factory functions


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
        
        case "gameBoard":
            
            // consoleOut=console.log("Output From Display Controller: " + gameMemory.gameStatus);
            return gameMemory.gameStatus.gameBoard;

            break;
    }
    
            // return {consoleOut};


});



const playRound=gameLogic();
// playRound.playGame();

console.log(gameMemory);
