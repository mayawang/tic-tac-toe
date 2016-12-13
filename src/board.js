var Board = function() {

  this.newBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]


  this.hasWon = function(){
    var won = false
    for (var i = 0; i < 3; i++){




      // console.log("i:" + i)
      // console.log("1: " + this.newBoard[i][0] + " 2: " + this.newBoard[i][1] + " 3: " + this.newBoard[i][2])
      // console.log("What!!" + (this.newBoard[i][0] !== null))
      // console.log("X" === "X" === "X")
      // console.log((this.newBoard[i][0] === this.newBoard[i][1] === this.newBoard[i][2]))
      // console.log((this.newBoard[i][0] == this.newBoard[i][1] == this.newBoard[i][2]))
      // console.log(((this.newBoard[i][0] === this.newBoard[i][1] === this.newBoard[i][2])
      //       && (this.newBoard[i][0] !== null)))



      if (((this.newBoard[i][0] === this.newBoard[i][1] && this.newBoard[i][1] === this.newBoard[i][2])
            && (this.newBoard[i][0] !== null)) ||

         ((this.newBoard[0][i] === this.newBoard[1][i] === this.newBoard[2][i])
            && (this.newBoard[0][i] !== null))) {
        won = true;
      }
    };

    if (((this.newBoard[0][0] === this.newBoard[1][1] === this.newBoard[2][2])
          && (this.newBoard[1][1] !== null)) ||

       ((this.newBoard[0][2] === this.newBoard[1][1] === this.newBoard[2][0])
          && (this.newBoard[1][1] !== null))) {
      won = true;
    };

    return won;
  }
};

var arr = [true, false, false]
function isEqual(a, b) {
    a === b;
  }
console.log (arr.reduce(isEqual))


export default Board;
