/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
------------Completed--------------
 */
 describe('UFO.js', function(){

describe('UFO object test', function(){

 it('UFObgi should be a function', function(){
    assert.isFunction(UFObgi);
    });
  it('the data for UFO object should not be null', function(){
    var ufo = new UFObgi();
    assert.isNotNull(ufo.image);
    assert.isNotNull(ufo.width);
    assert.isNotNull(ufo.height);
    assert.isNotNull(ufo.xPos);
    assert.isNotNull(ufo.yPos);
    assert.isNotNull(ufo.angle);
    assert.isNotNull(ufo.cx);
    assert.isNotNull(ufo.cy);
    assert.isNotNull(ufo.radius);
    assert.isNotNull(ufo.framestart);
    assert.isNotNull(ufo.timer);
  });
  it('there should be an update function', function(){
    var ufo = new UFObgi();
    assert.isFunction(ufo.Update);
  });
  it('angle should be updated to angle +1', function(){
    var ufo = new UFObgi();
    var oldangle = ufo.angle;
    ufo.Update();
    assert.equal(ufo.angle, oldangle +.01, 'should have added one to angle');
  });
  //testing for draw function needs to be commented out or else gets drawn
  /*
  it('should reset "framestart" and "timer" to zero', function(){
    var ufo = new UFObgi();
    ufo.timer = 24;
    var oldtimer = ufo.timer;
    ufo.Draw();
    assert.equal(ufo.timer, oldtimer +1, 'should add 1 to timer');
  });
  it('should go to else stmt and update framestart to 101', function(){
    var ufo = new UFObgi();
    ufo.timer = 25;
    ufo.Draw();
    assert.equal(ufo.framestart, 101, 'should set framestart to 101: else stmt');
  });
  it('should set framestart and timer to zero', function(){
    var ufo = new UFObgi();
    ufo.timer = 51;
    ufo.Draw(); //used to check timer and frame start is set to zero
    assert.equal(ufo.framestart, 0, 'should set framestart to zero: if stmt');
    assert.equal(ufo.timer, 0, 'should set timer to zero: if stmt')
  });
*/
  });
});
