import yyid from '../yyid.js'

describe('yyid()', function() {
  it('returns a string', function() {
    expect( typeof yyid() ).toBe('string');
  });

  it('looks like a UUID', function() {
    expect( yyid() ).toMatch(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/);
  });

  it('uses the the web crypto api', function() {
    spyOn(crypto, 'getRandomValues').and.callThrough();
    yyid();
    expect(crypto.getRandomValues).toHaveBeenCalled();
  });
});
