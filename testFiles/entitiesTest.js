/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
 */
 describe('entities.js', function(){

    describe('entities', function(){

    it('SolidTile should be a function', function(){
        assert.isFunction(SolidTile);
    });
    it('Projectile should be a function', function(){
        assert.isFunction(Projectile);
    });
    it('deathTile should be a function', function(){
        assert.isFunction(deathTile);
    });
    it('should have update function', function(){
        assert.isFunction(Projectile.prototype.Update);
    });
    it('draw should be a function should be a function', function(){
        assert.isFunction(Projectile.prototype.Draw);
    });
    it('onCollision should be a function should be a function', function(){
        assert.isFunction(Projectile.prototype.onCollision);
    });
});
});
