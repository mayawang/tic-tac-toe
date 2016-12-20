import Game from "app/models/game";
import Board from "app/collections/board";
import Player from "app/models/player";

describe('Game', function() {

  it("0. Players does not allow to use same symbol", function() {
      expect(function(){ new Game("Maya", "X", "Alyssa", "X")}).toThrow("Please use two separate symbols");
  });

  beforeEach(function() {
    var testGame = new Game({
      player1: {
        name: "Maya",
        symbol: "X"
      },
      player2:{
        name: "Alyssa",
        symbol:"O"
      }
    }
  });

  describe('newRound', function() {

    it("1. The game can return a gameBoard", function() {
        // var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        expect(typeof testGame.gameBoard).toEqual('object');
    });

    it("2. The game initialized with player1 to be the round starter", function() {
        // var testGame = new Game("Maya", "X", "Alyssa", "O");
        expect(testGame.roundStarter.name).toEqual('Maya');
    });

    it("3. The game switch turn when a new round starts", function() {
        // var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        expect(testGame.roundStarter.name).toEqual('Alyssa');
    });

  });

  describe('move', function() {

    it("4. The player whose turn it is can choose where to make the move and the move goes on the gameBoard", function() {
        // var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        var currentPlayer = testGame.whoseTurn
        testGame.move(1,1);
        expect(testGame.gameBoard[1][1]).toEqual(currentPlayer.symbol);
    });

    it("5. After one player made a move, it is the other player's turn", function() {
        // var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        testGame.move(1,1);
        expect(testGame.whoseTurn.symbol).toEqual("O");
    });

    it("6. The player whose turn it is can choose where to make the move and the move goes on the gameBoard", function() {
        // var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        testGame.move(1,1);
        var currentPlayer = testGame.whoseTurn
        testGame.move(1,2);
        expect(testGame.gameBoard[1][2]).toEqual(currentPlayer.symbol);
    });

    it("7. A player can not make a move on a tile that is occupied", function() {
        // var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        testGame.move(1,1);
        var tileChar = testGame.gameBoard[1][1];
        expect(function() {testGame.move(1,1)}).toThrow("Tile is occupied");
        expect(testGame.gameBoard[1][1]).toEqual(tileChar);
        expect(testGame.whoseTurn.name).toEqual("Alyssa");
    });
  });

  it("8. At the end of the game, there is a winner or a tied game. winner's score increments by 2, and tied player's score increments by 1. The board is reset and new round starts", function() {
      // var testGame = new Game("Maya", "X", "Alyssa", "O");
      testGame.newRound();
      testGame.move(0,0);
      testGame.move(1,0);
      testGame.move(0,1);
      testGame.move(1,1);
      testGame.move(0,2);
      var emptyBoard = new Board;
      expect(testGame.player1.score).toEqual(2);
      expect(testGame.player2.score).toEqual(0);
      expect(testGame.gameBoard).toEqual(emptyBoard.newBoard);
      expect(testGame.board.hasWon()).toEqual(false);
  });
});
