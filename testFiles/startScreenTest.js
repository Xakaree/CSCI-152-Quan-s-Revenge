/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
 */

 describe('startSceen.js', function(){
   describe('startScreen', function(){

 it('should be an object', function(){
   assert.isObject(startScreen);
 });
 it('should start out being active ', function(){
   assert.isTrue(startScreen.active);
 });
 it('should start with menu being null ', function(){
   assert.isNull(startScreen.menu);
 });
 it('should have a draw function ', function(){
   assert.isFunction(startScreen.Draw);
 });
 it('should have an update function ', function(){
   assert.isFunction(startScreen.Update);
 });
 /*
 it('should have a make start menu function and make startscreen inactive ', function(){

   //startScreen.Update();
   input.keyPress(pcontrols[0].attack);
   input.getAttack();
   var key = input.keyPress(pcontrols[0].attack);
   key = true;
   startScreen.Update();
   console.log(input.keyPress(pcontrols[0].attack));

   assert.isNotNull(startScreen.menu);
   assert.isFalse(startScreen.active);
 });
*/
});
   });
