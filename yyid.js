'use strict';

if( typeof process !== 'undefined' &&
    {}.toString.call(process) === '[object process]' ) {

  // Node
  (function(){
    var crypto = require('crypto');
    module.exports = function yyid() {
      var randomBytes = crypto.randomBytes(16);
      return randomBytes.slice( 0, 4).toString('hex') + '-' +
             randomBytes.slice( 4, 6).toString('hex') + '-' +
             randomBytes.slice( 6, 8).toString('hex') + '-' +
             randomBytes.slice( 8,10).toString('hex') + '-' +
             randomBytes.slice(10,16).toString('hex');
    };
  })();
} else {

  // Browser
  (function(global) {
    global.yyid = function yyid() {
      var i = 0;
      var randomTwoBytes = new Uint16Array(8);
      crypto.getRandomValues(randomTwoBytes);

      return 'xx-x-x-x-xxx'.replace(/x/g, function() {
        return ('000' + randomTwoBytes[i++].toString(16)).substr(-4);
      });
    }
  }(this));
}
