# YYID for JavaScript

- Generates a random string in [UUID#4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29) format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- In contrast to [RFC 4122](https://tools.ietf.org/rfc/rfc4122.txt), it uses all digits (128bit)
- Use a crytographically solid source of randomness

Comes in two flavors: Browser & Node

Source of randomness: [crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues) (Browser),  [crypto.randomBytes](http://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) (Node)

## Install

- npm

```
$ npm install yyid
```

- bower

```
$ bower install yyid
```

- yyid.js script file


## Usage
### Browser

```html
<script src="/path/to/yyid.js"></script>
<script>
yyid(); // => 'ee1c3727-d589-729b-4ad9-a37f77173730'
</script>
```

### Node

```javascript
yyid = require('yyid');
yyid(); // => '5ebd4295-92a2-c98b-9103-b1e5d16f2bfa'
```

## Other Versions

[YYID](https://github.com/micromodules/yyid) is available for more languages, such as Ruby, Elixir, or Rust.
