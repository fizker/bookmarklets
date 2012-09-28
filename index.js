#!/usr/bin/env node

var fs = require('fs')

fs.mkdir('out')
fs.writeFileSync('out/sg.js', require('./sg'))
