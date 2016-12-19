import Backbone from 'backbone';

const Tile = Backbone.Model.extend({
  // This model has the attributes for
  // a single contact: name, phone number, and email.
  defaults:{
    symbol: null,

  },

  initialize: function(option){
    // default constructor is fine
  },
});

export default Tile;
