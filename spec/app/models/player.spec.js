import Player from "player";

describe('Player', function() {

  describe('name', function() {

    it('1. player should be initialized with a name and a symbol', function() {
        var Player1 = new Player('Maya', "X" );
        var Player2 = new Player('Alyssa', "O");
        expect(Player1.name).toEqual('Maya');
        expect(Player1.symbol).toEqual('X');
        expect(Player2.name).toEqual('Alyssa');
        expect(Player2.symbol).toEqual('O');
    });


  });

});
