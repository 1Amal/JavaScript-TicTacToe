/* Amal K. 2024 March 
Tic Tac Toe Game
*/

const gameLogic =function (gameLogic)
{


    function gameStart(start)
    {

        gameMemory.gameStatus.aiBotTurns.push(1,2,3);
        gameMemory.playerDetails.playerName="Amal";
        console.log("Game started");
        console.log(gameMemory.playerDetails.playerName);
        console.log(gameMemory.gameStatus.aiBotTurns);


        // return {gameStart}
    }

    return{gameStart}


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


const amal=gameLogic('Amal');
amal.gameStart();
