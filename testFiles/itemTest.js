


describe('Item.js', function(){

    describe('Item()', function(){
    
        it('Should return an object', function(){
            var item = new Item(TommyGun, 10, 10, 10, 10);
            assert.isObject(item);
        });
        
        it('Item should have an entity property', function(){
            var item = new Item(TommyGun, 10, 10, 10, 10);
            assert.instanceOf(item.entity, Entity);
        });
        
        it('Item should have an entity property', function(){
            var item = new Item(TommyGun, 10, 10, 10, 10);
            assert.instanceOf(item.entity, Entity);
        });
        
        it('Should have an x position of 100', function(){
            var item = new Item(TommyGun, 100, 10, 10, 10);
            assert.equal(item.entity.x, 3200);
        });
        
        it('Should have an y position of 50', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            assert.equal(item.entity.y, 1600);
        });
        
        it('Item should be inactive should be after it picked up', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            var ply = new Player(10, 10, 10, 10, defaultcontrols, LCsprite);
            item.pickUp(ply);
            assert.isFalse(item.entity.active);
        });
    
        it('Item should be active after it is dropped', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            var ply = new Player(10, 10, 10, 10, defaultcontrols, LCsprite);
            item.pickUp(ply);
            item.drop(ply);
            assert.isTrue(item.entity.active);
        });
        
        it('Item should initially not have a parent', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            assert.isNull(item.parent);
        });
        
        it('player1 should be parent of item after it is picked up', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            var player1 = new Player(10, 10, 10, 10, defaultcontrols, LCsprite);
            item.pickUp(player1);
            assert.equal(item.parent, player1);
        });
        
        it('Item should no longer have parent after it is dropped ', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            var player1 = new Player(10, 10, 10, 10, defaultcontrols, LCsprite);
            item.pickUp(player1);
            item.drop(player1);
            assert.isNull(item.parent);
        });
        
        it('atkcnt should be incremented', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            assert.equal(item.atkcnt, 0);
            item.atkCool = true;
            item.atkDelay = 10;
            item.atkTimer();
            assert.isAbove(item.atkcnt, 0);
        });
        
        it('atk cool should be reset to false', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            item.atkCool = true;
            item.atkDelay = 1;
            item.atkTimer();
            assert.isFalse(item.atkCool);
        });
        
        it('entity velocity on x position should be at -300', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            var plyr = new Player(10, 10, 10, 10, defaultcontrols, LCsprite);
            var expected = -300*tileScale;
            item.pickUp(plyr);
            item.drop(-1);
            assert.equal(item.entity.vx, expected);
        });
        
        it('entity velocity on x position should be at 300', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            var plyr = new Player(10, 10, 10, 10, defaultcontrols, LCsprite);
            var expected = 300*tileScale;
            item.pickUp(plyr);
            item.drop(1);
            assert.equal(item.entity.vx, expected);
        });
        
    });
        describe('Gun()', function(){
        
            it('Gun should be a derived property of Item', function(){
            var gun  = new Gun(TommyGun, 100, 50, 10, 10);
            assert.instanceOf(gun, Item)
            });
            
            it('Gun should have inherited pickup function ', function(){
            var gun  = new Gun(TommyGun, 100, 50, 10, 10);
            assert.isFunction(gun.pickUp);
            });
            
            it('Gun should have inherited drop function ', function(){
            var gun  = new Gun(TommyGun, 100, 50, 10, 10);
            assert.isFunction(gun.drop);
            });
            
            it('Gun should have inherited drop function ', function(){
            var gun  = new Gun(TommyGun, 100, 50, 10, 10);
            assert.isFunction(gun.drop);
            });
            
            it('Gun should be reloading', function(){
            var gun  = new Gun(TommyGun, 100, 50, 10, 10);
            });
            
            it('Gun should be reloading', function(){
            var gun  = new Gun(TommyGun, 100, 50, 10, 10);
            });
        
        });

});