const express = require('express')
const app = express()
const port = 7373
const fs = require('fs')

let nations = []
fs.readFile('nations.txt', (err, input) => {
	if (err) throw err;
	nations = input.toString().split('\n')
})

let nationIP = {}
fs.readFile('ndata.json', (err, input) => {
	if (err) throw err;
	nationIP = JSON.parse(input.toString())
})

app.get('/get-region', function(req,res) {
	res.end('WIP')
})

app.post('/get-region', function(req,res) {
	res.render('./error-pages/403.html')
})

app.listen(port, () => console.log('Micronations IP API running on port '+port))

