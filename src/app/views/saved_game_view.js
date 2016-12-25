import $ from 'jquery';
import Backbone from 'backbone';

const SavedGameView = Backbone.View.extend({
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
    'click .btn-delete': "deleteClicked",
  },

  deleteClicked: function(event) {
    event.stopPropagation();
    this.trigger("delete_clicked", this.model.get('id'));
  }

});

export default SavedGameView;
