# YYID [![[travis]](https://travis-ci.org/janlelis/yyid.js.png)](https://travis-ci.org/janlelis/yyid.js)

Generates tokens that look like [type 4 UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29), but are more random.

Comes in two flavors: A node version (based on [crypto.randomBytes](http://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback)), and a browser version (based on [crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues).).


## Install

Via node package manager:

   $ npm install yyid


Via bower.io:

   $ bower install yyid


Or directly use the yyid.js script file!


## Usage
### Browser

```html
<script src="/path/to/yyid.js"></script>
<script>
yyid(); // => 'ee1c3727-d589-729b-4ad9-a37f77173730'
</script>
...
```

### Node

```javascript
yyid = require('./yyid');
yyid(); // => '5ebd4295-92a2-c98b-9103-b1e5d16f2bfa'
...
```

## Also see

YYID for [Ruby](https://github.com/janlelis/yyid)
