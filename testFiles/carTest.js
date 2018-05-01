/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
------Completed-------
 */

 describe('car.js', function(){
   describe('car', function(){



 it('should be a Car function', function(){
    assert.isFunction(Car);
 });
 it('car object values should not be null', function(){
   var newcar = new Car();
   assert.isNotNull(newcar.image);
   assert.isNotNull(newcar.width);
   assert.isNotNull(newcar.height);
   assert.isNotNull(newcar.xPos);
   assert.isNotNull(newcar.yPos);
   assert.isNotNull(newcar.cx);
   assert.isNotNull(newcar.cy);
   assert.isNotNull(newcar.radius);
   assert.isNotNull(newcar.framestart);
   assert.isNotNull(newcar.timer);


 });
it('there should be a draw function', function(){
  var newcar = new Car();
  assert.isFunction(newcar.Draw);
});
it('there should be an update function', function(){
  var newcar = new Car();
  assert.isFunction(newcar.Update);
});
it('xpos should be updated to xpos +1', function(){
  var car = new Car();
  var oldxpos = car.xPos;
  car.Update();
  assert.equal(car.xPos, oldxpos +1, 'should have added one to old pos');
});
it('if xPos is greater than 1280 it should be reset to -275', function(){
  var car = new Car();
  car.xPos = 1281;
  car.Update();
  assert.equal(car.xPos, -275, 'should be reset to -275');
});
it('should reset "framestart" and "timer" to zero', function(){
  var car = new Car();
  car.timer = 31;
  car.Draw();
  assert.equal(car.timer, 0, 'should be set to zero');
  assert.equal(car.framestart, 0, 'should be set to zero');
});
it('should reset framestart  to 201 if timer is over 15 and timer should be updated', function(){
  var car = new Car();
  car.timer = 15;
  car.Draw();
  assert.equal(car.framestart, 201, 'should be set to zero');
  assert.equal(car.timer, 16, 'timer should be updated')
});



});
   });
