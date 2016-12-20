import $ from 'jquery';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';
import Tile from 'app/models/tile';
import TileView from 'app/views/tile_view';
import Board from 'app/collections/board';
import BoardView from 'app/views/board_view';

var initialTiles = [
  { symbol: 'O' },
  { symbol: 'O' },
  { symbol: 'O' },

  { symbol: 'O' },
  { symbol: 'X' },
  { symbol: 'O' },

  { symbol: 'X' },
  { symbol: 'O' },
  { symbol: 'O' },
];

/*
var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});
*/

$(document).ready(function() {
  var board = new Board(initialTiles);

  var p1 = new Player({
    name: "player 1",
    symbol: "O",
  });

  var p2 = new Player({
    name: "player 2",
    symbol: "X",
  });

  var game = new Game({
    board: board,
    player1: p1,
    player2: p2,
  });

  var gameView = new GameView({
    el: $('#game'),
    model: game
  });

  gameView.render();
});
