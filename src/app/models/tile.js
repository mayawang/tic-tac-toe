import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model has the attributes for
  // a single contact: name, phone number, and email.
  defaults:{
    symbol: "Placeholder name",

  },

  initialize: function(option){
    // default constructor is fine
  },
});

export default Contact;
