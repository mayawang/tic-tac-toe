import Backbone from 'backbone';
import SavedGame from 'app/models/saved_game';

const SavedGames = Backbone.Collection.extend({
  model: SavedGame,
  url: 'http://localhost:3000' + 'api/v1/games',
  parse: function(data) {
     return data.games;
  }
});

export default SavedGames;
