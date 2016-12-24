import Backbone from 'backbone';
import $ from 'jquery';

import Board from "app/collections/board";
import Player from "app/models/player";
import SavedGame from "app/models/saved_game";

const Game = Backbone.Model.extend({
  // This model represents the overall application.
  defaults:{
    board: null,
    player1: null,
    player2: null,
    roundStarter: null,
    whoseTurn: null,
  },

  GameAPIRoot: 'http://localhost:3000',

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
    this.set("whoseTurn", this.get("roundStarter"));
  },

  // Create a new round
  newRound: function() {
    // Generate a new game board
    this.get("board").clearBoard();

    // Change the round starter for the next round
    if (this.get("roundStarter") === this.get("player1")) {
      this.set("roundStarter", this.get("player2"));
    } else {
      this.set("roundStarter", this.get("player1"));
    }

    // Determine who starts this round:
    this.set("whoseTurn", this.get("roundStarter"));
  },

  gameWon: function() {
    // determine winner
    var winner = this.get("whoseTurn");
    // add score to winner
    var winnerScore = winner.get("score");
    winner.set("score", winnerScore + 2);
    // decide whether to start a new round
    this.saveGame();
    return this.newRound();
  },

  gameTied: function() {
    // add score
    var player1Score = this.get("player1").get("score");
    this.get("player1").set("score", player1Score + 1);

    var player2Score = this.get("player2").get("score");
    this.get("player2").set("score", player2Score + 1);

    this.saveGame();
    // decide whether to start a new round
    return this.newRound()

  },

  move: function(cid) {
    var currentPlayer = this.get("whoseTurn");
    var symbol = currentPlayer.get("symbol");
    this.get("board").move(cid, symbol);

    // swap player after making a move
    if (currentPlayer === this.get("player1")) {
      this.set("whoseTurn", this.get("player2"));
    } else {
      this.set("whoseTurn", this.get("player1"));
    }
  },

  boardToArray: function(){
    return this.get("board").models.map(function(tile){
      if (tile.get("symbol")){
        return tile.get("symbol");
      } else {
        return " ";
      }
    });
  },

  playerToArray: function(){
    return [this.get('player1').get("name"), this.get('player2').get("name")];
  },

  outcome: function(){
    if (this.get("board").hasWon()){
      var winner = this.get("whoseTurn")
      return winner.get("symbol");
    } else if (this.get("board").hasTied()){
      return "draw";
    } else {
      throw "logic error."
    }
  },

  playedAt: function(){
    var date = new Date();
    return date.toISOString();
  },

  saveGame: function(){
    var gameData = new SavedGame({
      board: this.boardToArray(),
      players: this.playerToArray(),
      outcome: this.outcome(),
      played_at: this.playedAt()
    });

    $.post({
      url: this.GameAPIRoot + '/api/v1/games',
      data: gameData.toJSON(),
      dataType: "json",
    }).done(function() {
      console.log("saved game data");
    }).fail(function(err) {
      if (err.status === 201) {
        console.log("saved game data");
      } else {
        console.warn("failed to save game data", err);
      }
    });
  }

});


export default Game;
