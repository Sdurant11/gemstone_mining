$(document).ready(initializeApp);
var player1;
// var player2;
var gameBoard;



function initializeApp() {
  gameBoard = new Game();

  player1 = new Player();
  // player2 = new Player();
  gameBoard.player1 = player1;
  gameBoard.addEventListeners();

  $('.instructionModalCloseButton').click(closeModal);//added for the click button


}

function closeModal() {
  $(".instructionModal").hide();
}
