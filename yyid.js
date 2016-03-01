'use strict';

(function(global) {
  global.yyid = function yyid() {
    var i = 0;
    var randomTwoBytes = new Uint16Array(8);
    global.crypto.getRandomValues(randomTwoBytes);

    return 'xx-x-x-x-xxx'.replace(/x/g, function() {
      return ('000' + randomTwoBytes[i++].toString(16)).substr(-4);
    });
  }
}(this));
