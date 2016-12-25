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

  allSame: function(winSet){
    // check if all same tiles in a row and the tile are not empty
    var isSame = winSet.every(function(win){
      return winSet[0].get("symbol") === win.get("symbol");
    })

    return isSame && winSet[0].get("symbol");
  },

  hasWon: function(){
    // check if there is a win in horizontal, vertical or Diagonal
    return this.possibleWins().some(this.allSame);
  },

  hasTied: function(){
    var isfull = true;
    for (var i = 0; i < this.size(); i++) {
      if (!this.at(i).get("symbol")){
         isfull = false;
      }
    }
    return isfull && !this.hasWon();
  },

  roundOver: function(){
    return this.hasWon() || this.hasTied()
  },

  clearBoard: function() {
    for (var i = 0; i < this.size(); i ++){
      this.at(i).set("symbol", null);
    }
  },

  move: function(cid, symbol) {
    if (this.get(cid).get("symbol")){
      window.alert("This tile has been occupied");
      return
    }

    this.get(cid).set("symbol", symbol);

    if (this.hasWon()) {
      this.trigger("game_won");
    } else if (this.hasTied()) {
      this.trigger("game_tied");
    } 
  }

});

export default Board;
