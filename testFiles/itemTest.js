


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
            var ply = new Player()
            item.pickUp();
            assert.isFalse(item.entity.active);
        });
    
        it('Item should be active should be after it picked up', function(){
            var item = new Item(TommyGun, 100, 50, 10, 10);
            assert.isFalse(item.entity.active);
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
        
        });

});