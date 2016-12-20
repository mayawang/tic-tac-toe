import Backbone from 'backbone';

import Board from "board";
import Player from "player";


const Game = Backbone.Model.extend({
  // This model represents the overall application.
  defaults:{
    board: null,
    player1: null,
    player2: null,
    roundStarter: null,
    whoseTurn: null,
  },

  initialize: function(option) {
    var player1 = this.get('player1');
    var player2 = this.get('player2');
    var board = this.get('board');

    this.listenTo(board, "game_won", this.gameWon);
    this.listenTo(board, "game_tied", this.gameTied);

    if (player1.get("symbol") === player2.get("symbol")) {
      throw "Please use two separate symbols"
    };

    // Set the beginning player
    this.set("roundStarter", player1);

    // Namespace whose turn to this level
    this.set("whoseTurn", this.get("roundStarter");
  },

  // Create a new round
  newRound: function() {
    // Generate a new game board
    this.get("board").reset();

    // Change the round starter for the next round
    if (this.get("roundStarter") === this.get("player1")) {
      this.set("roundStarter", this.get("player2"));
    } else {
      this.set("roundStarter", this.get("player1"));
    }

    // Determine who starts this round:
    this.set("whoseTurn", this.get("roundStarter");
  },

  gameWon: function() {
    // determine winner
    var winner = this.get("whoseTurn");

    // add score to winner
    var winnerScore = winner.get("score");
    winner.set("score", winnerScore + 2);

    // decide whether to start a new round
  },

  gameTied: function() {
    // add score
    var player1Score = this.get("player1").get("score");
    this.get("player1").set("score", player1Score + 1);

    var player2Score = this.get("player2").get("score");
    this.get("player2").set("score", player2Score + 1);

    // decide whether to start a new round
  },

  move: function(row, col) {
    var currentPlayer = this.get("whoseTurn");
    var symbol = currentPlayer.get("symbol");
    this.get("board").move(row, col, symbol);

    // swap player after making a move
    if (currentPlayer === this.get("player1")) {
      this.set("whoseTurn", this.get("player2"));
    } else {
      this.set("whoseTurn"), this.get("player1"));
    }
  }
});


export default Game;
