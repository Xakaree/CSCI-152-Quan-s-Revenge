describe('Entity.js', function(){
            
        describe('Entity()', function(){
        
            it('Should return an object', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.isNotNull(e);
            });
            
            it('Gravity should be set at 3000', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.equal(e.grav, 3000);
            });
            
            it('X position should be at 10', function(){
                var e = new Entity(10,1,1,1,'Solid');
                assert.equal(e.x, 10);
            });
            
            it('Y position should be at 50', function(){
                var e = new Entity(10,50,1,1,'Solid');
                assert.equal(e.y, 50);
            });
            
            it('Entity width should be 1', function(){
                var e = new Entity(10,1,1,1,'Solid');
                assert.equal(e.width, 1);
            });
            
            it('Entity height should be 1', function(){
                var e = new Entity(10,1,1,1,'Solid');
                assert.equal(e.height, 1);
            });
            
            it('Should return null', function(){
                var e = new Entity(1,'t',1,1,'Solid');
                assert.isNull(e, 'passed');
            });
            
            it('Should be labeled a solid entity', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.equal(e.tag, 'Solid');
            });
            
            it('Friction should be at 700.0', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.equal(e.friction, 700.0);
            });
            
            it('Air friction should be at 200', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.equal(e.airfriction, 200.0);
            });
            
            it('getTop function should return Y position', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.equal(e.getTop(), e.y);
            });
            
            it('getRight function should return X position + Entity Width', function(){
                var e = new Entity(10,1,10,1,'Solid');
                assert.equal(e.getRight(), e.x + e.width);
            });
            
            it('getBot function should return Y position + Entity height', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.equal(e.getBot(), e.y + e.height);
            });
            
            it('getLeft function should return X position', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.equal(e.getLeft(), e.x);
            });
            
            it('getMid function should return mid x of Entity', function(){
                var e = new Entity(1,1,1,1,'Solid');
                var expected =  e.x + (e.width/2);
                assert.equal(e.getMidX(), expected);
            });
            
            it('getMid function should return mid y of Entity', function(){
                var e = new Entity(1,1,1,1,'Solid');
                var expected =  e.y + (e.height/2);
                assert.equal(e.getMidY(), expected);
            });
            
            it('Entity should be active', function(){
                var e = new Entity(1,1,1,1,'Solid');
                assert.isTrue(e.active);
            });
            
            
        });
            
});
 