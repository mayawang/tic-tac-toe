import Game from "game";
import Board from "board";
import Player from "player";

describe('Game', function() {

  describe('newRound', function() {

    it("1. The game can return a gameBoard", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        expect(typeof testGame.gameBoard).toEqual('object');
    });

    it("2. The game initialized with player1 to be the round starter", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        expect(testGame.roundStarter.name).toEqual('Maya');
    });

    it("3. The game switch turn when a new round starts", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        expect(testGame.roundStarter.name).toEqual('Alyssa');
    });

  });

  describe('move', function() {

    it("4. The player whose turn it is can choose where to make the move and the move goes on the gameBoard", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        var currentPlayer = testGame.whoseTurn
        testGame.move(1,1);
        expect(testGame.gameBoard[1][1]).toEqual(currentPlayer.symbol);
    });

    it("5. After one player made a move, it is the other player's turn", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        testGame.move(1,1);
        expect(testGame.whoseTurn.symbol).toEqual("O");
    });

    it("6. The player whose turn it is can choose where to make the move and the move goes on the gameBoard", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        testGame.move(1,1);
        var currentPlayer = testGame.whoseTurn
        testGame.move(1,2);
        expect(testGame.gameBoard[1][2]).toEqual(currentPlayer.symbol);
    });

    it("7. A player can not make a move on a tile that is occupied", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        testGame.move(1,1);
        var tileChar = testGame.gameBoard[1][1];
        expect(function() {testGame.move(1,1)}).toThrow("Tile is occupied");
        expect(testGame.gameBoard[1][1]).toEqual(tileChar);
        expect(testGame.whoseTurn.name).toEqual("Alyssa");
    });


  });

    //
    // it('The game should know whose turn it is', function() {
    //     var testGame = new Game();
    //     var testGame = new Game();
    //     expect(testGame.whoseTurn(testPlayer,1,1)).toEqual('Maya');
    // });

    //   it('Player can choose a spot to make the move', function() {
    //       var testPlayer = new Player('Maya');
    //       expect(testPlayer.move(testPlayer,1,1)).toEqual('Maya');
    //   });




});
