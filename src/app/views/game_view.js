import $ from 'jquery';
import Backbone from 'backbone';
import PlayerView from 'app/views/player_view';
import BoardView from 'app/views/board_view';

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

    this.listenTo(this.boardView, "move_tile", this.moveTile);

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
    this.boardElement.append(this.boardView.$el);

    return this;
  },

  moveTile: function(tile_id){
    this.model.move(tile_id);
  }


});

export default GameView;
