import Backbone from 'backbone';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }
});

export default GameView;
