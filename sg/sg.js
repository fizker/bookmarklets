var mainElement = document.createElement('div')
  , loader = document.createElement('progress')

loader.max = pics.length
loader.value = 0

document.body.append(mainElement)
mainElement.append(loader)

var images = pics.map(function(pic, idx) {
	var img = document.createElement('img')
	img.src=pic[0]
	img
		.on('load', function() {
			loader.value++
		})
		.appendTo(mainElement)
		.classList.add('next')

	return { elm: img
	     , show: show
	       }

	function show() {
	}
})

images[0].show()

window.addEventListener('keyup', function(event) {
	switch(event.keyCode) {
		case 37:
			return prev()
		case 39:
			return next()
	}
})
