var _mainElement = _.createElement('<section class="root"></section>')
  , _loader = _.createElement('<progress value=0 max=' + pics.length + '></progress>')
  , _button = _.createElement('<button class="btn-enable-fullscreen">Go to fullscreen</button>')

_mainElement.appendTo(document.body)

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

var images = pics.map(function(pic, idx) {
	var _img = _.createElement('<img src=' + pic[0] + '></img>')

	_img
		.on('load', function() {
			_loader.obj.value++
		})
		.appendTo(_mainElement)
		.addClass('next')

	_img.obj.dataset.idx = idx

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

images[0].show()

window.addEventListener('keyup', function(event) {
	switch(event.keyCode) {
		case 37:
			return prev()
		case 39:
			return next()
	}
})
