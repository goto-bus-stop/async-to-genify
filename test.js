var assert = require('assert')
var fs = require('fs')
var browserify = require('browserify')

browserify('test/input.js')
  .transform('.')
  .bundle()
  .pipe(fs.createWriteStream('test/actual.js'))
  .on('close', function () {
    assert.strictEqual(
      fs.readFileSync('test/actual.js', 'utf8'),
      fs.readFileSync('test/expected.js', 'utf8'),
      'Incorrect output. Compare test/expected.js and test/actual.js for details.'
    )

    console.log('ok')
  })
  .on('error', function (err) {
    throw err
  })
