# async-to-genify

Browserify transform for [async-to-gen](https://github.com/leebyron/async-to-gen).
Turns async functions into generator functions.

## Usage

```
npm install --save-dev browserify async-to-genify
```

**CLI**

```
browserify -t async-to-genify src/entry.js
```

**Node.js**

```js
browserify()
  .transform('async-to-genify')
  .bundle()
```

## License

[MIT](./LICENSE)
