import Player from "player";

describe('Player', function() {

  describe('name', function() {

    it('player should be initialized with a name', function() {
        var testPlayer = new Player('Maya');
        expect(testPlayer.name).toEqual('Maya');
    });


  });

});
