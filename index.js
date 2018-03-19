const express = require('express')
const fs = require('fs')
const app = express()

const json = fs.readFileSync('./bigJson.json', 'utf8');

app.get('/', (req, res) => setTimeout(() =>res.send(json), 1000))

app.listen(4000, () => console.log('Example app listening on port 4000!'))
