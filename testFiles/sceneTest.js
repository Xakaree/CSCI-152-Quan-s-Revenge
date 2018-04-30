/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
 */
 describe('scene.js', function(){
   describe('scene', function(){
     it('map should not be null', function(){
       assert.isNotNull(map);
     });

 it('map2 should not be null', function(){
     assert.isNotNull(map2);
 });

 it('scene should be a function', function(){
     assert.isFunction(Scene);
 });
 it('entites should be an array and empty', function(){
   var scene = new Scene();
     assert.isArray(scene.entities);
     assert.isEmpty(scene.entities, 'should be null')
 });
 it('items should be an array and not empty', function(){
   var scene = new Scene();
     assert.isArray(scene.items);
     assert.isNotNull(scene.items, 'should not be empty')
 });
 it('should have 4 items in the item array', function(){
   var scene = new Scene();
     assert.isArray(scene.entities);
     assert.equal(scene.items.length,4, 'should be 4 items')
 });
 it('there should be a start function', function(){
   assert.isFunction(Scene.prototype.Start);
 });
 it('there should be a function to pass players to scene', function(){
   assert.isFunction(Scene.prototype.PassPlayers);
 });
 it('there should be a function to load map to scene', function(){
   assert.isFunction(Scene.prototype.loadMap);
 });
 it('there should be a function to tp update scene', function(){
   assert.isFunction(Scene.prototype.Update);
 });
 it('there should be a function to check collisions and resolve collf', function(){
   assert.isFunction(Scene.prototype.checkCollisions);
   assert.isFunction(Scene.prototype.resolveCollisions)
 });
 it('there should be a function to check if there is a winner', function(){
   assert.isFunction(Scene.prototype.checkWin);
 });
 it('there should be a function to draw each players health', function(){
   assert.isFunction(Scene.prototype.drawHealth);
 });
});
   });
