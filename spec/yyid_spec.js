'use strict';

if (typeof(yyid) === 'undefined') {
  var isNode = true;
  var yyid = require('../yyid');
} else {
  var isNode = false;
}


describe('yyid()', function() {
  it('returns a string', function() {
    expect( typeof yyid() ).toBe('string');
  });

  it('looks like a UUID', function() {
    expect( yyid() ).toMatch(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/);
  });

  if(isNode){
    it('uses the the node crypto api', function() {
      var crypto = require('crypto');
      spyOn(crypto, 'randomBytes').andCallThrough();
      yyid();
      expect(crypto.randomBytes).toHaveBeenCalled();
    });
  } else {
    it('uses the the web crypto api', function() {
      spyOn(crypto, 'getRandomValues').andCallThrough();
      yyid();
      expect(crypto.getRandomValues).toHaveBeenCalled();
    });
  }
});
