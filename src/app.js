import $ from 'jquery';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';
import Tile from 'app/models/tile';
import TileView from 'app/views/tile_view';
import Board from 'app/collections/board';
import BoardView from 'app/views/board_view';
import Player from 'app/models/player';
import PlayerView from 'app/views/player_view';
import SavedGames from 'app/collections/saved_games';
import SavedGameView from 'app/views/saved_game_view';

var initialTiles = [
  { symbol: null },
  { symbol: null },
  { symbol: null },

  { symbol: null },
  { symbol: null },
  { symbol: null },

  { symbol: null },
  { symbol: null },
  { symbol: null },
];

$(document).ready(function() {
  var board = new Board(initialTiles);
  var savedGames = new SavedGames();

  var p1 = new Player({
    name: "Player O",
    symbol: "O",
  });

  var p2 = new Player({
    name: "Player X",
    symbol: "X",
  });

  var game = new Game({
    board: board,
    player1: p1,
    player2: p2,
    savedGames: savedGames,
  });

  var gameView = new GameView({
    el: $('#game'),
    model: game
  });


  gameView.render();
});
