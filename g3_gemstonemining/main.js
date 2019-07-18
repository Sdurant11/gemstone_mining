$( document ).ready( initializeApp );
var player1;
var player2;
var gameBoard;




function initializeApp() {
  gameBoard = new Game([player1, player2]);


  player1 = new Player();
  player2 = new Player();

  gameBoard.addEventListeners();

}
