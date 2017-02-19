var asyncToGen = require('async-to-gen')
var through = require('through2')

module.exports = function (file, opts) {
  var bufs = []

  var debug = opts._flags ? opts._flags.debug : true

  function ondata (buf, enc, cb) {
    bufs.push(buf)
    cb()
  }

  function onend (cb) {
    var source = Buffer.concat(bufs).toString('utf8')
    try {
      var result = asyncToGen(source)
      var sourceMap = debug
        ? '\n//# sourceMappingURL=' + result.generateMap().toUrl() + '\n'
        : ''
      cb(null, result.toString() + sourceMap)
    } catch (e) {
      cb(e)
    }
  }

  return through(ondata, onend)
}
