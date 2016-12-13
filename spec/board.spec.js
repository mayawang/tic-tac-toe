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

  });

  describe('hasWon', function() {
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
    }

    it('5. A completely blank board does not win', function() {
        var testBoard = new Board();
        expect(testBoard.hasWon()).toEqual(false);
    });

    it('6. A non-winning random board does not win', function() {
        var testBoard = new Board();
        testBoard.newBoard = [
          [null, "X", null],
          [null, null, "X"],
          ["X", null, null]
        ];
        expect(testBoard.hasWon()).toEqual(false);
    });

    it('7. A horizontal win wins', function() {
        var testBoard = new Board();
        testBoard.newBoard = [
          ["X", "X", "X"],
          [null, null, null],
          [null, null, null]
        ];
        expect(testBoard.hasWon()).toEqual(true);
    });

    it('8. A vertical win wins', function() {
        var testBoard = new Board();
        testBoard.newBoard = [
          [null, "X", null],
          [null, "X", null],
          [null, "X", null]
        ];
        expect(testBoard.hasWon()).toEqual(true);
    });

    it('9. A diagonal win wins', function() {
        var testBoard = new Board();
        testBoard.newBoard = [
          [null, null, "X"],
          [null, "X", null],
          ["X", null, null]
        ];
        expect(testBoard.hasWon()).toEqual(true);
    });
  });

  describe('hasTied', function() {

    it('10. A game knows it is tied', function() {
        var testBoard = new Board();
        testBoard.newBoard = [
          ["O", "X", "O"],
          ["X", "X", "O"],
          ["O", "O", "X"]
        ];
        expect(testBoard.hasTied()).toEqual(true);
    });


    it('11. A round is over if there is a win', function() {
        var testBoard = new Board();
        testBoard.newBoard = [
          [null, null, "X"],
          [null, "X", null],
          ["X", null, null]
        ];
        expect(testBoard.roundOver()).toEqual(true);
    });

    it('12. A round is over if there is a tie', function() {
        var testBoard = new Board();
        testBoard.newBoard = [
          ["O", "X", "O"],
          ["X", "X", "O"],
          ["O", "O", "X"]
        ];
        expect(testBoard.roundOver()).toEqual(true);
    });

  });

});
