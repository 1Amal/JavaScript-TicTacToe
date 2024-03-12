/* Amal K. 2024 March 
Tic Tac Toe Game
*/

const gameLogic =function ()
{


    function gameStart(start)
    {

        if (gameMemory.gameStatus.roundNo>=1 && gameMemory.gameStatus.roundNo<9)
            {
                console.log("Welcome to next turn");
                gameMemory.gameStatus.roundNo+=1;//Advance the round no by 1
                console.log(gameMemory.gameStatus.roundNo);
                gameMemory.gameStatus.gameBoard=[]; // Empty the array
                console.log(gameMemory.gameStatus.gameBoard);

            }
        
        else if(gameMemory.gameStatus.roundNo>=9)
        {
            console.log("Game Over")
        }
        
        else{
            console.log("Game has not been run Please input your Name ");

            // gameMemory.playerDetails.playerName=prompt();
            gameMemory.gameStatus.roundNo=+1;
            console.log(gameMemory.playerDetails.playerName);
            gameMemory.gameStatus.gameBoard=[]; // Empty the array
            gameMemory.gameStatus.gameBoard.splice(1, 1,"hello")


            console.log(gameMemory.gameStatus.gameBoard);
        }

    
        // gameMemory.gameStatus.aiBotTurns.push(1,2,3);
        // gameMemory.playerDetails.playerName="Amal";
        // console.log(gameMemory.playerDetails.playerName);
        // console.log(gameMemory.gameStatus.aiBotTurns);


        return {gameStart}
    }

    function randomChoice()
    {
        let randomNumber=Math.floor(Math.random()*2);
        return {randomNumber}

    }    

    function aiBot()
    {
        const random1=gameLogic;
        const numberIs=random1.randomChoice;
        gameMemory.gameStatus.gameBoard[0];
        return {numberIs}
    }

    return{gameStart,randomChoice,aiBot} // This will return the Factory functions


    // displayController;


}


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
 
    const gameStatus=    {playerTurns:[],
                        aiBotTurns:[],
                        roundNo:0,
                        gameBoard:[],
                        }

    return {playerDetails,aiBotDetails, gameStatus}
})();



const displayController= (function  ()
{
    return (console.log(gameMemory));


})();


const amal=gameLogic();
amal.gameStart();

let consoleTest=amal.aiBot();

console.log(consoleTest);
