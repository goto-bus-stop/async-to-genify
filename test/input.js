module.exports = async function getUwaveServerNames () {
  var response = await fetch('https://announce.u-wave.net/')
  var data = await response.json()
  return data.map(function (server) {
    return server.name
  })
}
