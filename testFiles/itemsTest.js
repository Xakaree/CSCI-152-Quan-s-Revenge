/*
        describe('name of group', function(){

        });

        it('description of test case;, function(){
        test case goes here
        });
    });
 */
 describe('items.js', function(){

   describe('items', function(){



 it('TommyGun function check', function(){
   assert.isFunction(TommyGun);
    });

    it('TommyGun attack function check', function(){
      assert.isFunction(TommyGun.prototype.attack);
       });
    it('Tommy gun correct sprite check', function(){
        var gun = new TommyGun(64,64);
      assert.equal(gun.sprite, TMY, 'TommyGun should be the sprite');
    });
  it('Shotgun function check', function(){
    assert.isFunction(Shotgun);
   });
   it('Shot gun correct sprite check', function(){
       var gun = new Shotgun(64,64);
     assert.equal(gun.sprite, DBS, 'DBS should be the sprite');
   });
   it('Shotgun attack function check', function(){
     assert.isFunction(Shotgun.prototype.attack);
    });


 it('Flamethrower function check', function(){
   assert.isFunction(Flamethrower);
    });
    it('Flamethrower attack function check', function(){
      assert.isFunction(Flamethrower.prototype.attack);
       });
     it('Flamethrower correct sprite check', function(){
         var gun = new Flamethrower(64,64);
       assert.equal(gun.sprite, FLM, 'TommyGun should be the sprite');
      });
    it('Lazer function check', function(){
      assert.isFunction(Lazer);
     });
     it('Lazer attack function check', function(){
       assert.isFunction(Flamethrower.prototype.attack);
        });
     it('Gun prototype object check', function(){
       assert.isObject(Gun.prototype);
     });
});
});
