# YYID for JavaScript (Browser) [![[travis]](https://travis-ci.org/janlelis/yyid.js.svg)](https://travis-ci.org/janlelis/yyid.js)

- Generates a [UUID#4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29)-like random string, but in contrast to [RFC 4122](https://tools.ietf.org/rfc/rfc4122.txt), omits the static bits
- Format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` (128bit randomness)
- Uses a cryptographically solid source of randomness, if possible: [crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues)
- See [yyid-node](https://github.com/janlelis/yyid-node.js) for a server-side (node.js) version

## Install

### npm

```
$ npm install yyid
```

### yarn

```
$ yarn add yyid
```

### script file

Copy `yyid.js` from https://raw.githubusercontent.com/janlelis/yyid.js/master/yyid.js

## Usage

```js
import yyid from "yyid"
yyid(); // => 'ee1c3727-d589-729b-4ad9-a37f77173730'
```

## Other Versions

[YYID](https://github.com/micromodules/yyid) is available for more languages, such as Ruby, Elixir, and Rust.
