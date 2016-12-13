var Board = function() {

  this.newBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];


  this.possibleWins = function() {

    return [
      // Horizontal wins
      [this.newBoard[0][0], this.newBoard[0][1], this.newBoard[0][2]],
      [this.newBoard[1][0], this.newBoard[1][1], this.newBoard[1][2]],
      [this.newBoard[2][0], this.newBoard[2][1], this.newBoard[2][2]],
      // Vertical wins
      [this.newBoard[0][0], this.newBoard[1][0], this.newBoard[2][0]],
      [this.newBoard[0][1], this.newBoard[1][1], this.newBoard[2][1]],
      [this.newBoard[0][2], this.newBoard[1][2], this.newBoard[2][2]],
      // Diagonal wins
      [this.newBoard[0][0], this.newBoard[1][1], this.newBoard[2][2]],
      [this.newBoard[0][2], this.newBoard[1][1], this.newBoard[2][0]]
    ];
  };


  this.hasWon = function(){
    //subfunction to check if all elements of an array are the same
    var allSame = function(inputArray) {
      var same = true;
      for (var x = 1; x < 3; x++) {
        if (inputArray[0] === null || inputArray[0] !== inputArray[x]) {
          same = false;
        }
      }
      return same;
    };

    // loop to check each array for any that are allSame
    var won = false;
    for (var i = 0; i < this.possibleWins().length; i++) {
      if (allSame(this.possibleWins()[i]) === true) {
        won = true;
      }
    }
    return won;
  };

  this.hasTied = function(){
    var tied = false;
    for (var i = 0; i < 3; i++) {
      if (!this.newBoard[i].includes(null) && (this.hasWon() !== true)){
        tied = true;
      }
    }
    return tied;
  }

  this.roundOver = function(){
    if (this.hasWon() === true || this.hasTied() === true){
      return true;
    }
    else{
      return false;
    }
  }

};


export default Board;
