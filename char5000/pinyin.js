let pinyin = require('pinyin')
let chars = require('./data.json')
let fs = require('fs')

chars.forEach((e, i) => {
  e.id = (i + 1)
  e.pinyin = pinyin(e.name)[0][0]
})

fs.writeFile('./data.json', JSON.stringify(chars, null, 2), (err) => {
  if (err) {
    console.log('写文件操作失败')
  } else {
    console.log('写文件操作成功')
  }
})

fs.readFile('./5000.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('讀取失敗')
  } else {
    console.log(data)
  }
})
