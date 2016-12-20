import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import TileView from 'app/views/tile_view';

const BoardView = Backbone.View.extend({
  initialize: function() {
    this.tileTemplate = _.template($('#tmpl-tile').html());

    // Keep track of the <ul> element
    this.listElement = $('#board');

    this.tileViewList = [];

    // Process each contact
    this.model.forEach(function(tile) {
      this.addTileView(tile);
    }, this); // bind `this` so it's available inside forEach

    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContactView);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.tileViewList.forEach(function(tileView) {
      tileView.render();

      this.listElement.append(tileView.$el);
    }, this);

    return this; // enable chained calls
  },

  addTileView: function(tile) {
    var tileView = new TileView({
      model: tile,
      template: this.tileTemplate
    });

    this.listenTo(TileView, "tile_clicked", this.tileClicked);
    this.tileViewList.push(tileView);
  },

  tileClicked: function() {
    // TODO get the tile id being clicked
  },
});

export default BoardView;
