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
    it('TommyGun correct sprite check', function(){
      assert.equal(TommyGun.prototype.sprite, TMY, 'TommyGun should be the sprite');
    });
  it('Shotgun function check', function(){
    assert.isFunction(Shotgun);
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
