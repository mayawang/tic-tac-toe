import Board from "board";

describe('Board', function() {

  describe('newBoard', function() {

    it('1. When starts a round, create a new board which is an array', function() {
        var testBoard = new Board();
        expect(typeof testBoard.newBoard).toEqual('object');
    });

    it('2. When starts a round, create a new board which has three rows', function() {
        var testBoard = new Board();
        expect(testBoard.newBoard.length).toEqual(3);
    });

    function checkSubArrays(index) {
      it('3. Each row in the board array is an array', function() {
        expect(typeof testBoard.newBoard[index]).toEqual('object');
      });

      it('4. Each subarray (board row) has three columns', function() {
        expect(testBoard.newBoard[index].length).toEqual(3);
      });
    }

    var testBoard = new Board();
    for (var i = 0; i < 3; i++) {
      checkSubArrays(i);
    };


    it('5. if there is NOT three symbols in a row, hasWon is false'  , function() {
        var testBoard = new Board();
        expect(testBoard.hasWon()).toEqual(false);
        testBoard.newBoard = [
          [null, "X", null],
          [null, null, "X"],
          ["X", null, null]
        ]
        console.log(testBoard.newBoard)
        expect(testBoard.hasWon()).toEqual(false);
    });

    it('6. if there is three symbols in a row, hasWon is true', function() {
        var testBoard = new Board();
        expect(testBoard.hasWon()).toEqual(true);

        testBoard.newBoard = [
          ["X", "X", "X"],
          [null, null, null],
          [null, null, null]
        ]
        expect(testBoard.hasWon()).toEqual(true);

        testBoard.newBoard = [
          [null, "X", null],
          [null, "X", null],
          [null, "X", null]
        ]
        expect(testBoard.hasWon()).toEqual(true);

        testBoard.newBoard = [
          [null, null, "X"],
          [null, "X", null],
          ["X", null, null]
        ]
        expect(testBoard.hasWon()).toEqual(true);
    });


  });

});
