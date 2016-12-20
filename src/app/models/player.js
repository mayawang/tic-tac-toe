import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  defaults:{
    name: "unname player",
    symbol: "O",
    score: 0,
  },
  initialize: function(option){
  }
});

export default Player;
