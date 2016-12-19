import Backbone from 'backbone';
import Tile from 'app/models/tile';

const Board = Backbone.Collection.extend({
  // This Board represents a collection of tiles
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
  model: Tile

});

export default Board;
