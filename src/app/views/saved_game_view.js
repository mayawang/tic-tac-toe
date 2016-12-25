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
    console.log("delete button clicked")
    this.trigger("delete_clicked", this.model.get('id'));
    console.log("delete button triggered")
  }

});

export default SavedGameView;
