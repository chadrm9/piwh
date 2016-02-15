var q = require('q')

q
.try (function () {
  var result = JSON.parse(process.argv[2])
  if (!result) throw new Error()
  return result
})
.catch (function (err) {
  console.log(err)
})
