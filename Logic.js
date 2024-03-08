/* Amal K. 2024 March */

function gameLogic ()
{



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
 
    const gameBoard=    {playerTurns:[],
                        aiBotTurns:[],
                        roundNo:0,
                        1:"",
                        2:"",
                        3:"",
                        4:"",
                        5:"",
                        6:"",
                        7:"",
                        8:"",
                        9:"",
                        }

    return {playerDetails,aiBotDetails, gameBoard}
})();



function displayController ()
{

}

console.dir(gameMemory.gameBoard.aiBotTurns.push("Hi"));



