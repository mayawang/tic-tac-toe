import Backbone from 'backbone';
import Tile from 'app/models/tile';

const Board = Backbone.Collection.extend({
  // This Board represents a collection of tiles
  // and should include any methods or attributes
  // that are involved in working with more than one tile.
  model: Tile,

  possibleWins: function() {

    return [
      // Horizontal wins
      [this.at(0), this.at(1), this.at(2)],
      [this.at(3), this.at(4), this.at(5)],
      [this.at(6), this.at(7), this.at(8)],

      // Vertical wins
      [this.at(0), this.at(3), this.at(6)],
      [this.at(1), this.at(4), this.at(7)],
      [this.at(2), this.at(5), this.at(8)],
      // Diagonal wins
      [this.at(0), this.at(4), this.at(8)],
      [this.at(2), this.at(4), this.at(6)],
    ];
  },


  hasWon: function(){
    //subfunction to check if all elements of an array are the same
    // TODO, change this to lodash all
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
  },

  hasTied: function(){
    var tied = false;
    for (var i = 0; i < 3; i++) {
      if (!this.get("newBoard")[i].includes(null) && (this.hasWon() !== true)){
        tied = true;
      }
    }
    return tied;
  },

  roundOver: function(){
    if (this.hasWon() === true || this.hasTied() === true){
      return true;
    }
    else{
      return false;
    }
  },

  clearBoard: function() {
    for (var i = 0; i < this.collection.size(); i ++){
      this.at(i).set("symbol", "");
    }
  },

  move: function(index, symbol) {
    if (this.at(index) !== null){
      throw "Tile is occupied";
    }

    this.at(index).set("symbol", symbol);

    if (this.get("board").hasWon() === true) {
      this.trigger("game_won");
    } else if (this.get("board").hasTied() === true) {
      this.trigger("game_tied");
    }
  }

});

export default Board;
