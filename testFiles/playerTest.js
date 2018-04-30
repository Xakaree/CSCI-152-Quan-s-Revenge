/*
        describe('name of group', function(){

        });

        it('description of test case', function(){
        test case goes here
        });
 */

 describe('player.js', function(){
    describe('player', function(){


 it('player should be a function', function(){
       assert.isFunction(Player);
    });
    it('health should be set to 100', function(){
      player = new Player(1, 2, 100, 100, pcontrols ,LC1);
        assert.equal(player.health, 100, 'should start will 100 health');
      //  assert.isFalse(Player.jumping);
      //  assert.isFalse(Player.idling);
    });
    it('actions should be set to false', function(){
      player = new Player(1, 2, 100, 100, pcontrols ,LC1);
        assert.equal(player.attacking, false, 'attacking should initially be false');
        assert.equal(player.jumping, false, 'jumping should initially be false');
        assert.equal(player.idling, false, 'idling should initially be false');
    });
    it('update counts should be a function', function(){
          assert.isFunction(Player.prototype.updateCnts);
       });
    it('movement should be a function', function(){
         assert.isFunction(Player.prototype.movement);
      });
    it('aniChange should be a function', function(){
          assert.isFunction(Player.prototype.aniChange);
     });
    it('update should be a function', function(){
         assert.isFunction(Player.prototype.Update);
    });
    it('onCollision should be a function', function(){
          assert.isFunction(Player.prototype.onCollision);
     });
    it('draw should be a function', function(){
         assert.isFunction(Player.prototype.Draw);
    });
    it('initially player should be alive',function(){
      player = new Player(1, 2, 100, 100, pcontrols ,LC1);
      assert.isTrue(player.isAlive);

    });
    it('initially draw player should be true',function(){
      player = new Player(1, 2, 100, 100, pcontrols ,LC1);
      assert.isTrue(player.drawPlayer);

    });
    it('sprite passed should match to the one being used ',function(){
      player = new Player(1, 2, 100, 100, pcontrols ,LC1);
      assert.equal(player.sprite, LC1);
    });

  });
});
