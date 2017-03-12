#! /usr/bin/env node

let pinyin = require('pinyin')
let chars = require('./data.json')
let fs = require('fs')

chars.forEach((e, i) => {
  e.id = (i + 1)
  e.pinyin = pinyin(e.name)[0][0]
})

fs.writeFile('./data.json', JSON.stringify(chars, null, 2), (err) => {
  if (err) {
    console.log('寫入 data.json 失敗')
  } else {
    console.log('寫入 data.json 成功')
  }
})

let data = '/* eslint no-unused-var: true */\n'
data += 'var char5000 = ' + JSON.stringify(chars, null, 2)

fs.writeFile('../js/char5000.js', data, (err) => {
  if (err) {
    console.log('寫入 char5000.js 失敗')
  } else {
    console.log('寫入 char5000.js 成功')
  }
})
