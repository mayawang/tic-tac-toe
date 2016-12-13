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


  });

});
