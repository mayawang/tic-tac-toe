import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

const PlayerView = Backbone.View.extend({
    initialize: function(options){
      this.template = _.template($('#tmpl-player').html());
      this.listenTo(this.model, "change", this.render);
    },
    render: function() {
      // reconnect all Event Handlers
      this.delegateEvents();

      var html = this.template(this.model.toJSON());

      this.$el.html(html);

      return this;
    },

 });

 export default PlayerView;
