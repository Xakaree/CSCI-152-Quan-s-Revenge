/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
needs to be tested no RC is in these project
 */

 describe('car.js', function(){
   describe('car', function(){



 it('should be a Car function', function(){
    assert.isFunction(Car);
 });

it('there should be a draw function', function(){
  var newcar = new Car();
  assert.isFunction(newcar.Draw);
});

});
   });
