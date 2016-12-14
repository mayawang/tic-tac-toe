import Game from "game";
import Board from "board";
import Player from "player";

describe('Game', function() {

  describe('newRound', function() {

    it("The game can return a gameBoard", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        expect(typeof testGame.gameBoard).toEqual('object');
    });

    it("The game initialized with player1 to be the round starter", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        expect(testGame.roundStarter.name).toEqual('Maya');
    });

    it("The game switch turn when a new round starts", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        expect(testGame.roundStarter.name).toEqual('Alyssa');
    });

  });

  describe('move', function() {

    it("The player whose turn it is can choose where to make the move and the move goes on the gameBoard", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        var currentPlayer = testGame.whoseTurn
        testGame.move(1,1);
        expect(testGame.gameBoard[1][1]).toEqual(currentPlayer.symbol);
    });

    it("After one player made a move, it is the other player's turn", function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        testGame.move(1,1);
        expect(testGame.whoseTurn.symbol).toEqual("O");
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
