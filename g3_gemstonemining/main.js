$(document).ready(initializeApp);
var player1;
// var player2;
var gameBoard;



function initializeApp() {
  gameBoard = new Game();
  gameBoard.addEventListeners();
  gameBoard.addPlayer('Grumpy');
  gameBoard.addPlayer('Sleepy');
  gameBoard.addPlayer('Creepy');
  gameBoard.addPlayer('Dopey');
  $('.instructionModalCloseButton').click(closeModal);//added for the click button


}

function closeModal() {
  $(".instructionModal").hide();
}
