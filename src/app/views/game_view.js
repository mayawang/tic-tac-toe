import Backbone from 'backbone';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.playersElement = $('#players');
    this.playerViews = [
      new PlayerView({
        model: this.model.get('player1'),
      }),
      new PlayerView({
        model: this.model.get('player2'),
      }),
    ];

    this.boardElement = $("#board")
    this.boardView = new BoardView({
      model: this.model.get('board'),
    });

    this.render();
  },

  events: {
    'click .btn-newgame': 'createNewGame',
  },

  render: function() {

    // Make sure the list in the DOM is empty
    // before we start appending items
    this.playersElement.empty()

    // Loop through the data assigned to this view
    this.playerViews.forEach(function(playerView) {
      playerView.render();
      this.playersElement.append(playerView.$el);
    }, this);

    this.boardElement.empty();
    this.boardView.render();
    this.boardElement.append(boardView.$el);

    return this;
  }
});

export default GameView;
