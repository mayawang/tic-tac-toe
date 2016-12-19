import $ from 'jquery';
import Backbone from 'backbone';
import PlayerView from 'app/views/player_view';

const TileView = Backbone.View.extend({
  // initialize: function(options) {
  //   this.template = options.template;
  //   this.listenTo(this.model, "change", this.render);
  // },
  //
  // render: function() {
  //   // reconnect all Event Handlers
  //   this.delegateEvents();
  //
  //   var html = this.template(this.model.toJSON());
  //
  //   this.$el.html(html);
  //
  //   return this;
  // },
  //
  // events: {
  //   'click': "showThisContactDetails",
  // },
  //
  // showThisContactDetails: function(event) {
  //   event.stopPropagation();
  //   var contactDetailsView = new ContactDetailsView({
  //     model: this.model,
  //   });
  //
  //   contactDetailsView.render();
  //   contactDetailsView.show();
  // },
});

export default TileView;
