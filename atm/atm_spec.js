var assert = require('assert');
var atm = require('./atm');
describe("atm", function(){

  it("should give distance from target", function(){
    assert.equal(0, atm.distanceFrom(5, 1, 10))
  })
  it("should give distance from target", function(){
    assert.equal(1, atm.distanceFrom(9, 2, 5))
  })
  it("should give distance from target", function(){
    assert.equal(1, atm.distanceFrom(9, 1, 8))
  })
  it("should give distance from target", function(){
    assert.equal(5, atm.distanceFrom(9, 2, 2))
  })
  it("should give distance from target", function(){
    assert.equal(1, atm.distanceFrom(5, 2, 2))
  })

  it("should composes", function(){
    assert.equal(true, atm.composes(5, {1:10}))
  })
});
