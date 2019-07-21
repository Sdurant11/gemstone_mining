$(document).ready(initializeApp);


function initializeApp() {
  gameBoard = new Game();
  gameBoard.addEventListeners();
  gameBoard.addPlayer('Grumpy');
  gameBoard.addPlayer('Sleepy');
  gameBoard.addPlayer('Creepy');
  gameBoard.addPlayer('Dopey');
  $('.instructionModalCloseButton').click(closeModal);


}

function closeModal() {
  $(".instructionModal").hide();
}
