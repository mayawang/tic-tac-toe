import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
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
  var p1 = new Player();
  var p2 = new Player();
  var application = new Application({
    board: board,
    player1: p1,
    player2: p2,
  });

  var applicationView = new ApplicationView({
    el: $('#application'),
    model: application
  });
  application.render();
});
