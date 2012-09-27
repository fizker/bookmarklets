var images = prepareImages(pics)
  , _mainElement = _.createElement('<section class="root"></section>')
  , _loader = _.createElement('<progress value=0 max=' + pics.length + '></progress>')
  , _button = _.createElement('<button class="btn-enable-fullscreen">Go to fullscreen</button>')

_mainElement.appendTo(document.body)

images.forEach(function(img) {
	img._elm.appendTo(_mainElement)
})
images[0].show()

_.createElement('<div class="loading-views"></div>')
	.append(_loader)
	.append(_button)
	.appendTo(document.body)

if(typeof(css) !== 'undefined') {
	var style = document.createElement('style')
	style.innerHTML = css
	$$('head').appendChild(style)
}

_button
	.on('click', function() {
		_mainElement.requestFullScreen()
	})

function prepareImages(pics) {
	return pics
		.filter(function(pic) {
			return pic
		})
		.map(function(pic, idx) {
			var _img = _.createElement('<img data-idx=' + idx + ' src=' + pic[0] + '></img>')
			    .addClass('next')
			    .on('load', function() { _loader.obj.value++ })

			return { _elm: _img
			       , show: show
			       }

			function show() {
				var current = $$('.current')
				if(current) {
					_(current)
						.addClass(current.dataset.idx < idx ? 'prev' : 'next')
						.removeClass('current')
				}
				_img
					.addClass('current')
					.removeClass('prev', 'next')
			}
		})
}

function next() {
	var current = $$('.current')
	  , next = images[+current.dataset.idx+1]

	if(!next) {
		next = images[0]
	}
	next.show()
}
function prev() {
	var current = $$('.current')
	  , prev = images[+current.dataset.idx-1]

	if(!prev) {
		prev = images[images.length-1]
	}
	prev.show()
}

window.addEventListener('keyup', function(event) {
	switch(event.keyCode) {
		case 37:
			return prev()
		case 39:
			return next()
	}
})
