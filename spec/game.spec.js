import Game from "game";
import Board from "board";
import Player from "player";

describe('Game', function() {

  describe('move', function() {
    // it('The game should know whose turn it is', function() {
    //     var testGame = new Game();
    //     var testGame = new Game();
    //     expect(testGame.whoseTurn(testPlayer,1,1)).toEqual('Maya');
    // });

    it('The game should know whose turn it is', function() {
        var testGame = new Game("Maya", "X", "Alyssa", "O");
        testGame.newRound();
        console.log(typeof testGame.gameBoard);
        console.log(testGame.gameBoard);
        expect(typeof testGame.gameBoard).toEqual('object');
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




});
