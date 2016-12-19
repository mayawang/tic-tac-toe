import Player from "app/models/player";

describe('Player', function() {

  beforeEach(function() {
    var Player1 = new Player({
      name: 'Maya',
      symbol: "X"
    });
    var Player2 = new Player({
      name: 'Alyssa',
      symbol: "O"
    });
  });

  describe('name', function() {

    it('1. player should be initialized with a name and a symbol', function() {

        expect(Player1.get("name")).toEqual('Maya');
        expect(Player1.get("symbol")).toEqual('X');
        expect(Player2.get("name")).toEqual('Alyssa');
        expect(Player2.get("symbol")).toEqual('O');
    });

  });

});
