var q = require('q')

function parsePromised (str) {
  var defer = q.defer()
  var result
  try {
    result = JSON.parse(str)
  }
  catch (err) {
    defer.reject(err)
  }
  defer.resolve(result)
  return defer.promise
}

parsePromised(process.argv[2]).then(null, console.log) 
