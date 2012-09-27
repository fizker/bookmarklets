var fs = require('fs')
  , path = require('path')
  , format = require('util').format
  , read = read

module.exports = build()

function build() {
	return format(
	  ';(function(css) {%s})("%s")',
	  read('base.js', 'sg.js')
	, read('style.css').replace(/"/g,'\"').replace(/\n/g, '\\n')
	)
}

function read() {
	return Array.prototype.map.call(arguments, function(file) {
		return fs.readFileSync(path.join(__dirname, file), 'utf8')
	}).join('')
}
