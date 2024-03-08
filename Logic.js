/* Amal K. 2024 March 
Tic Tac Toe Game
*/

const gameLogic =function  ()
{
    gameMemory.gameStatus.aiBotTurns.push(1,2,3);
    gameMemory.playerDetails.playerName="Amal";



    // displayController;


}


const gameMemory= (function ()
{
    //Variable for Player
    const playerDetails={playerName:"",
                         playerMarker:"X",
                         playerScore:0,
                         playerWins:0,
        
                        }

    //Variables for AiBot
    const aiBotDetails={
                        aiBotName:"AiBot",
                        aiBotScore:0,
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


gameLogic();
