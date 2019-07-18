
$(document).ready(initializeApp);
var player1;
// var player2;
var gameBoard;

function initializeApp() {
    gameBoard = new Game();

    player1 = new Player();
    player2 = new Player(); 
    gameBoard.player1 = player1;
    $('.instructionModalCloseButton').click(closeModal);//added for the click button
    gameBoard.addEventListeners();
    console.log(gameBoard.player1.playerStats);
    console.log(gameBoard);
}


function closeModal() {
    $(".instructionModal").hide();
}