/* Amal K. 2024 March 
Tic Tac Toe Game
*/

// *.*.*.*.*.*.*.*.*.*. Game Control Logic *.*.*.*.*.*.*.*.*.*.

const gameLogic =function ()
{
//Function to end the game

const newGame=function()

    {
        gameMemory.gameStatus.gameBoard=["null","null","null","null","null","null","null","null","null"];
        gameMemory.gameStatus.turnNo=0;
        gameMemory.gameStatus.lastTurn="aiBot";
        displayController("newGame");
        playGame();
        return{newGame};

    }

    const gameOver=function()
    {
        displayController("gameOver");
        // gameMemory.gameStatus.lastTurn==="gameOver";
        gameMemory.gameStatus.turnNo=11;
        gameMemory.gameStatus.lastTurn==="New";
        return;

    }
    
    const playGame= function ()
    {
//This While loop will run for nine times
        while (gameMemory.gameStatus.turnNo<=9){

// This will run the function to get Players input
            if (gameMemory.gameStatus.lastTurn==="aiBot") 
            {
                gameMemory.gameStatus.turnNo+=1;
                console.log(gameMemory.gameStatus.turnNo);    
                player();
                checkForWinner();
                    
            }
//This will run the function to generate aiBot response
            else if (gameMemory.gameStatus.lastTurn===gameMemory.playerDetails.playerName)
            {
                console.log("aiBot's Turn");
                gameMemory.gameStatus.lastTurn="aiBot";
                gameMemory.gameStatus.turnNo+=1;
                console.log(gameMemory.gameStatus.turnNo);  
                aiBot();
                checkForWinner();

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
                gameMemory.gameStatus.lastTurn=gameMemory.playerDetails.playerName;
         
                return;
            }

        else if (gameMemory.gameStatus.gameBoard[playerChoice]==="aiBot" || gameMemory.playerDetails.playerName)
            {
                console.log("Error Array not empty, so not safe to store player input, please try again");
                // playerChoice=prompt("Please Enter Grid number between 0-9: ");
                player();

            }

            playGame(); // Return to original function

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

// Function to check for winning conditions
    const checkForWinner=function()
        {
            const finalGameBoard= displayController("gameBoard"); 

        // gameMemory.gameStatus.gameBoard=["aiBot","aiBot","aiBot","aiBot","aiBot","aiBot","aiBot","aiBot","aiBot"]; //This is for testing only
        
        // gameMemory.playerDetails.playerName="Amal"; //This is for testing only

// Player win array for comparison
        const playerWin=[gameMemory.playerDetails.playerName,gameMemory.playerDetails.playerName,gameMemory.playerDetails.playerName]; 

// aiBot win array for comparison
        const aiBotWin=["aiBot","aiBot","aiBot"]; 

// Straight Line: All three Row wins: 0,1,2 in any combination
        const winningCondition1=[gameMemory.gameStatus.gameBoard[0],gameMemory.gameStatus.gameBoard[1],gameMemory.gameStatus.gameBoard[2]]; //[0,1,2];

// Straight Line: All three Row wins:3,4,5 in any combination
        const winningCondition2=[gameMemory.gameStatus.gameBoard[3],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[5]];//[3,4.5];

// Straight Line: All three Row wins: 6,7,8 in any combination
        const winningCondition3=[gameMemory.gameStatus.gameBoard[6],gameMemory.gameStatus.gameBoard[7],gameMemory.gameStatus.gameBoard[8]];//[6,7,8];
        
// Straight Line: All three Column wins:0,3,6 in any combination
        const winningCondition4=[gameMemory.gameStatus.gameBoard[0],gameMemory.gameStatus.gameBoard[3],gameMemory.gameStatus.gameBoard[6]];//[0,3,6];

// Straight Line: All three Column wins:1,4,7 in any combination
        const winningCondition5=[gameMemory.gameStatus.gameBoard[1],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[7]];//[1,4,7];

// Straight Line: All three Column wins:2,5,8 in any combination
        const winningCondition6=[gameMemory.gameStatus.gameBoard[2],gameMemory.gameStatus.gameBoard[5],gameMemory.gameStatus.gameBoard[8]];//[2,5,8];

// Straight Line: All three Diagonal wins: 0,4,8 in any combination
        const winningCondition7=[gameMemory.gameStatus.gameBoard[0],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[8]]; //[0,4,8];

// Straight Line: All three Diagonal wins: 2,4,6 in any combination
        const winningCondition8=[gameMemory.gameStatus.gameBoard[2],gameMemory.gameStatus.gameBoard[4],gameMemory.gameStatus.gameBoard[6]];//[2,4,6];

// Conditions for Tie/Draw, Anything that is not in the above win conditions will be a draw/Tie after all 9 grid slots have been filled


// Function to compare two arrays and if both arrays are equal will give out true and if they are different will give out false. Using this you can compare above win conditions against two fixed arrays of const aiBotWin=["aiBot","aiBot","aiBot"] which will give aiBot win condition and const playerWin=[gameMemory.playerDetails.playerName,gameMemory.playerDetails.playerName,gameMemory.playerDetails.playerName]; which will give player win condition. 

        const compareArrays = (a, b) =>
        a.length === b.length &&
        a.every((element, index) => element === b[index]);
   
//This will save the wining condition status to a variable which can be used for comparison
        let playerWonCondition1= compareArrays(playerWin, winningCondition1); 
        let playerWonCondition2= compareArrays(playerWin, winningCondition2); 
        let playerWonCondition3= compareArrays(playerWin, winningCondition3); 
        let playerWonCondition4= compareArrays(playerWin, winningCondition4); 
        let playerWonCondition5= compareArrays(playerWin, winningCondition5); 
        let playerWonCondition6= compareArrays(playerWin, winningCondition6); 
        let playerWonCondition7= compareArrays(playerWin, winningCondition7); 
        let playerWonCondition8= compareArrays(playerWin, winningCondition8); 


        let aiBotWonCondition1=compareArrays(aiBotWin,winningCondition1);
        let aiBotWonCondition2=compareArrays(aiBotWin,winningCondition2); 
        let aiBotWonCondition3=compareArrays(aiBotWin,winningCondition3); 
        let aiBotWonCondition4=compareArrays(aiBotWin,winningCondition4); 
        let aiBotWonCondition5=compareArrays(aiBotWin,winningCondition5); 
        let aiBotWonCondition6=compareArrays(aiBotWin,winningCondition6); 
        let aiBotWonCondition7=compareArrays(aiBotWin,winningCondition7); 
        let aiBotWonCondition8=compareArrays(aiBotWin,winningCondition8); 

//This will check if player has won        
        if (playerWonCondition1===true || playerWonCondition2===true || playerWonCondition3===true || playerWonCondition4===true || playerWonCondition5===true || playerWonCondition6===true || playerWonCondition7===true || playerWonCondition8===true)
            {
                // console.log("Yayyyy Player won");

                console.log("Player winning conditions "+ " 0,1,2:" + playerWonCondition1 + 
                " 3,4,5: "+ playerWonCondition2 + 
                " 6,7,8: "+ playerWonCondition3 + 
                " 0,3,6: "+ playerWonCondition4 + 
                " 1,4,7: "+ playerWonCondition5 + 
                " 2,5,8: "+ playerWonCondition6 + 
                " 0,4,8: "+ playerWonCondition7 + 
                " 2,4,6: "+ playerWonCondition8);


                displayController("playerWon");
                gameOver();


                return;
            }

//This will check if the aiBot has won

        else if (aiBotWonCondition1===true || aiBotWonCondition2===true || aiBotWonCondition3===true || aiBotWonCondition4===true || aiBotWonCondition5===true || aiBotWonCondition6===true || aiBotWonCondition7===true || aiBotWonCondition8===true)

        {
            // console.log("Yayyyy aiBot won");
            console.log("aiBot winning conditions "+" 0,1,2:" + aiBotWonCondition1 + 
                        " 3,4,5: "+ aiBotWonCondition2 + 
                        " 6,7,8: "+ aiBotWonCondition3 + 
                        " 0,3,6: "+ aiBotWonCondition4 + 
                        " 1,4,7: "+ aiBotWonCondition5 + 
                        " 2,5,8: "+ aiBotWonCondition6 + 
                        " 0,4,8: "+ aiBotWonCondition7 + 
                        " 2,4,6: "+ aiBotWonCondition8);

            displayController("aiBotWon");
            gameOver();

            return;
        }

        else if (gameMemory.gameStatus.turnNo>=9)
        {
            console.log("Game end in a Draw");
            gameOver();
        }

    }

return {newGame,gameOver,randomChoice,aiBot,playGame,player,checkForWinner} // This will return the Factory functions


}

// *.*.*.*.*.*.*.*.*.*. Game Memory *.*.*.*.*.*.*.*.*.*.

const gameMemory= (function ()
{
//Variables for Player
    const playerDetails={playerName:"",
                         playerMarker:"X",
                         playerWins:0,
        
                        }

//Variables for aiBot
    const aiBotDetails={
                        aiBotName:"aiBot",
                        aiBotWins:0,

                        }

//Variables for gameStatus
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
        case "newGame":
            consoleOut=console.log("Output From Display Controller: " + displayThis);
            gameMemory.playerDetails.playerName=prompt("Please Enter Your Name");

            break;
        
        case "gameBoard":
            
            // consoleOut=console.log("Output From Display Controller: " + gameMemory.gameStatus);
            return gameMemory.gameStatus.gameBoard;

            break;
        
        case "playerWon":
            console.log("Winner is: " + gameMemory.playerDetails.playerName);
            break;

        case "aiBotWon":
            console.log("Winner is: AiBot");
            break;

        case "gameOver":
            console.log("Game Over");
            break;

        case "draw":
            console.log("It's a draw, well played both of you");
            break;

    }
    

});

const newGameRound=gameLogic();
// playRound.playGame();

console.log(gameMemory);
