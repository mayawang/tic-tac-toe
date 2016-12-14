import Board from "board";
import Player from "player";


var Game = function (name1, symbol1, name2, symbol2) {
  this.player1 = new Player(name1, symbol1);
  this.player2 = new Player(name2, symbol2);

  // Set the beginning player
  this.roundStarter = this.player1;

  // Namespace whose turn to this level
  this.whoseTurn = this.roundStarter;

  // Namespace the gameboard to this level
  this.gameBoard;

  // Create a new round
  this.newRound = function() {
    // Generate a new game board
    var board = new Board();
    this.gameBoard = board.newBoard;
    // Determine who starts this round:
    this.whoseTurn = this.roundStarter;
    // Change the round starter for the next round
    if (this.roundStarter === this.player1) {
      this.roundStarter = this.player2;
    }
    else {
      this.roundStarter = this.player1;
    }
  }

  this.move = function(row, column) {
    this.gameBoard[row][column] = this.whoseTurn.symbol;
    if (this.whoseTurn === this.player1) {
      this.whoseTurn = this.player2;
    }
    else {
      this.whoseTurn = this.player1;
    }
  }


  // this.move = function(player, row, column){
  //   Board.newBoard[row][column] = symbol;

}


export default Game;
