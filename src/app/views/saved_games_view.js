import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import SavedGameView from 'app/views/saved_game_view';

const SavedGamesView = Backbone.View.extend({
  initialize: function() {
    this.savedGameTemplate = _.template($('#tmpl-saved-game').html());

    // Keep track of the <ul> element
    this.historyElement = $('#history');

    this.savedGameViewList = [];

    // Process each contact
    this.model.models.forEach(function(savedGame) {
      this.addSavedGameView(savedGame);
    }, this); // bind `this` so it's available inside forEach

    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addSavedGameView);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.historyElement.empty();

    // Loop through the data assigned to this view
    this.savedGameViewList.forEach(function(savedGameView) {
      savedGameView.render();

      this.historyElement.append(savedGameView.$el);
    }, this);

    return this; // enable chained calls
  },

  addSavedGameView: function(savedGame) {
    var savedGameView = new SavedGameView({
      model: savedGame,
      template: this.savedGameTemplate
    });

    this.listenTo(savedGameView, "delete_clicked", this.deleteClicked);
    this.savedGameViewList.push(savedGameView);
  }

});

export default SavedGamesView;
