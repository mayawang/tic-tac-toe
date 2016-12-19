import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(option){
    this.set("name", option.name);
    this.set("symbol", option.symbol);
    this.set("score", 0)
  }
});


export default Player;
