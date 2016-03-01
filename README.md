# YYID for JavaScript (Browser) [![[travis]](https://travis-ci.org/janlelis/yyid.js.png)](https://travis-ci.org/janlelis/yyid.js)

- Generates a random string in [UUID#4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29) format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- In contrast to [RFC 4122](https://tools.ietf.org/rfc/rfc4122.txt), it uses all digits (128bit)
- Uses a crytographically solid source of randomness: [crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues)
- See [yyid-node](https://github.com/janlelis/yyid-node.js) for a server-side (node.js) version

## Install

### npm

```
$ npm install yyid
```

### Bower

```
$ bower install yyid
```

### script file

Copy `yyid.js`

## Usage

Use with your favorite build tool or directly via browser global:

```html
<script src="/path/to/yyid.js"></script>
<script>
yyid(); // => 'ee1c3727-d589-729b-4ad9-a37f77173730'
</script>
```

## Other Versions

[YYID](https://github.com/micromodules/yyid) is available for more languages, such as Ruby, Elixir, or Rust.
