import Backbone from 'backbone';

import Board from "board";
import Player from "player";


const Game = Backbone.Model.extend({
  // This model represents the overall application.
  defaults:{
    board: null,
    player1: null,
    player2: null
  },

  initialize: function(option){
    // if (symbol1 === symbol2) {
    //   throw "Please use two separate symbols"
    // };
    // this.set("player1", new Player(option.player1.name, option.player1.symbol));
    // this.set("player2", new Player(option.player2.name, option.player1.symbol));

    // Set the beginning player
    this.set("roundStarter", this.get("player1"));

    // Namespace whose turn to this level
    this.set("whoseTurn", this.get("roundStarter");

    // Namespace the gameboard to this level
    this.set("gameBoard");
    this.set("board")
  },

  // Create a new round
  newRound: function() {
    // Generate a new game board
    this.set("board", new Board());
    this.set("gameBoard", this.get("board").get("newBoard"));
    // Determine who starts this round:
    this.set("whoseTurn", this.get("roundStarter");
    // Change the round starter for the next round
    if (this.get("roundStarter") === this.get("player1")) {
      this.set("roundStarter", this.get("player2"));
    }
    else {
      this.set("roundStarter", this.get("player1"));
    }
  }

  move: function(row, column) {
    if (this.get("gameBoard"[row][column]) !== null){
      throw "Tile is occupied";
    }

    this.get("gameBoard"[row][column]) = this.get("whoseTurn").symbol;

    if (this.get("board").hasWon() === true) {
      this.get("whoseTurn").score += 2;
      this.newRound();
    }
    else if (this.get("board").hasTied() === true) {
      this.get("player1") += 1;
      this.get("player2") += 1;
      this.newRound();
    }
    else {
      if (this.get("whoseTurn") === this.get("player1")) {
        this.set("whoseTurn", this.get("player2"));
      }
      else {
        this.set("whoseTurn"), this.get("player1"));
      }
    }
  }

});


export default Game;
