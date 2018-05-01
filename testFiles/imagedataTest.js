/*
        describe('name of group', function(){



        it('description of test case', function(){
        test case goes here
        });
});
 */

 describe('imagedata.js', function(){

      describe('image data', function(){

    it('should have an object for LC sprite', function(){
        assert.isObject(LCsprite);
        });
    it('data for object should not be null: LC sprite', function(){
        assert.isNotNull(LCsprite.image);
        assert.isNotNull(LCsprite.damage);
        assert.isNotNull(LCsprite.portrait);
        assert.isNotNull(LCsprite.frameLimits);
        assert.isNotNull(LCsprite.width);
        assert.isNotNull(LCsprite.height);
 });

 it('should have an object for LC2 sprite', function(){
     assert.isObject(LCsprite2);
});
it('data for object should not be null: LC2 sprite', function(){
    assert.isNotNull(LCsprite2.image);
    assert.isNotNull(LCsprite2.damage);
    assert.isNotNull(LCsprite2.portrait);
    assert.isNotNull(LCsprite2.frameLimits);
    assert.isNotNull(LCsprite2.width);
    assert.isNotNull(LCsprite2.height);
});
it('should have an object for QS sprite', function(){
    assert.isObject(QSsprite);
});
it('data for object should not be null: QS sprite', function(){
    assert.isNotNull(QSsprite.image);
    assert.isNotNull(QSsprite.damage);
    assert.isNotNull(QSsprite.portrait);
    assert.isNotNull(QSsprite.frameLimits);
    assert.isNotNull(QSsprite.width);
    assert.isNotNull(QSsprite.height);
});
it('should have an object for QS2 sprite', function(){
    assert.isObject(QSsprite2);
});
it('data for object should not be null: QS2 sprite', function(){
    assert.isNotNull(QSsprite2.image);
    assert.isNotNull(QSsprite2.damage);
    assert.isNotNull(QSsprite2.portrait);
    assert.isNotNull(QSsprite2.frameLimits);
    assert.isNotNull(QSsprite2.width);
    assert.isNotNull(QSsprite2.height);
});
it('should have an object for GZ sprite', function(){
    assert.isObject(GZsprite);
});
it('data for object should not be null: GZ sprite', function(){
    assert.isNotNull(GZsprite.image);
    assert.isNotNull(GZsprite.damage);
    assert.isNotNull(GZsprite.portrait);
    assert.isNotNull(GZsprite.frameLimits);
    assert.isNotNull(GZsprite.width);
    assert.isNotNull(GZsprite.height);
});
it('should have an object for GZ2 sprite', function(){
    assert.isObject(GZsprite2);
});
it('data for object should not be null: GZ2 sprite', function(){
    assert.isNotNull(GZsprite2.image);
    assert.isNotNull(GZsprite2.damage);
    assert.isNotNull(GZsprite2.portrait);
    assert.isNotNull(GZsprite2.frameLimits);
    assert.isNotNull(GZsprite2.width);
    assert.isNotNull(GZsprite2.height);
});
it('should have an object for SH sprite', function(){
    assert.isObject(SHsprite);
});
it('data for object should not be null: SH sprite', function(){
    assert.isNotNull(SHsprite.image);
    assert.isNotNull(SHsprite.damage);
    assert.isNotNull(SHsprite.portrait);
    assert.isNotNull(SHsprite.frameLimits);
    assert.isNotNull(SHsprite.width);
    assert.isNotNull(SHsprite.height);
});
it('should have an object for SH2 sprite', function(){
    assert.isObject(SHsprite2);
});
it('data for object should not be null: SH2 sprite', function(){
    assert.isNotNull(SHsprite2.image);
    assert.isNotNull(SHsprite2.damage);
    assert.isNotNull(SHsprite2.portrait);
    assert.isNotNull(SHsprite2.frameLimits);
    assert.isNotNull(SHsprite2.width);
    assert.isNotNull(SHsprite2.height);
});

it('should have an object for UFO sprite', function(){
    assert.isObject(UFOsprite);
});
it('data for object image, frameLimits, width, height, should not be null: UFO sprite', function(){
    assert.isNotNull(UFOsprite.image);
    assert.isNotNull(UFOsprite.frameLimits);
    assert.isNotNull(UFOsprite.width);
    assert.isNotNull(UFOsprite.height);
});
it('data for object damage and portrait should be null: UFO sprite', function(){
    assert.isNull(UFOsprite.damage);
    assert.isNull(UFOsprite.portrait);

});

});
      });
