'use strict';

(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (global is window)
    global.yyid = factory();
  }
}(this, function() {
  return function yyid() {
    var i = 0;
    var randomTwoBytes = new Uint16Array(8);
    crypto.getRandomValues(randomTwoBytes);

    return 'xx-x-x-x-xxx'.replace(/x/g, function() {
      return ('000' + randomTwoBytes[i++].toString(16)).substr(-4);
    });
  }
}));
