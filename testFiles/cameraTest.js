/*
    describe('', function(){});

    it('', function(){});
*/

    describe('Camera.js', function(){
    
        describe('#camera()', function(){
        
            it('Should return an object', function(){
            var cam = new Camera();
            assert.isObject(cam);
            });
            
            it('Should return an object', function(){
            var cam = new Camera();
            assert.isObject(cam);
            });
            
            it('X  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.x,0);
            });
            
            it('Y  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.y,0);
            });
            
            it('RX  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.rx,0);
            });
            
            it('RY  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.ry,0);
            });
            
            it('width should be at 1280', function(){
            var cam = new Camera();
            assert.equal(cam.width, 1280);
            });
            
            it('height should be at 720', function(){
            var cam = new Camera();
            assert.equal(cam.height, 720);
            });
            
            it('lowX should be equal to width', function(){
            var cam = new Camera();
            assert.equal(cam.lowX, width);
            });
            
            it('lowY should be equal to width', function(){
            var cam = new Camera();
            assert.equal(cam.lowY, height);
            });
            
            it('highX  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.highX,0);
            });
            
            it('highY  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.highY,0);
            });
            
            it('midX  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.midX,0);
            });
            
            it('midY  position should be at 0', function(){
            var cam = new Camera();
            assert.equal(cam.midY,0);
            });
            
            
            it('It should return correct scale value', function(){
            var cam = new Camera();
            var ply = new Player(10, 10, 10, 10, defaultcontrols, LCsprite);
            var plys = [];
            plys.push(ply);
            scale = 2;
            var expected = scale;
            expected -= 0.3 * interval;
            cam.lowX = 0;
            cam.Update(plys);
            console.log(scale);
            console.log(expected);
            assert.equal(scale, expected);
            });

        
        });
    
    });