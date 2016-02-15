var q = require('q')
var defer1 = q.defer() 
var defer2 = q.defer()

function all (promise1, promise2) {
  var ip = q.defer()
  var counter = 0
  var value1, value2

  promise1
  .then(function (result) {
    value1 = result
    ++counter
    if(counter >= 2) ip.resolve([value1, value2])
  })
  .then(null, ip.reject)
  .done()

  promise2
  .then(function (result) {
    value2 = result
    ++counter
    if(counter >= 2) ip.resolve([value1, value2])
  })
  .then(null, ip.reject)
  .done()

  return ip.promise
}

all(defer1.promise, defer2.promise)
.then(console.log)
.done()

setTimeout(function() {
  defer1.resolve('PROMISES')
  defer2.resolve('FTW')
}, 200)
