var q = require('q')

function alwaysThrows () {
  throw new Error('OH NOES')
}

function iterate (int) {
  console.log(int)
  return (int + 1)
}

q.fcall(iterate, 1)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(alwaysThrows)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(null, console.log)
