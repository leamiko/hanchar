let pinyin = require('pinyin')
let chars = require('./chars').chars
chars.forEach((e) => {
  let p = pinyin(e.name)
  e.pinyin = p[0][0]
})

console.log(JSON.stringify(chars, null, 2))

