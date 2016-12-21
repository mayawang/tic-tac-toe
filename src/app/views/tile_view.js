import $ from 'jquery';
import Backbone from 'backbone';
import PlayerView from 'app/views/player_view';

const TileView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    // reconnect all Event Handlers
    this.delegateEvents();

    var html = this.template(this.model.toJSON());

    this.$el.html(html);

    return this;
  },

  events: {
    'click': "tileClicked",
  },

  tileClicked: function(event) {
    event.stopPropagation();
    this.trigger("tile_clicked", this.model.cid);
  },
});

export default TileView;
