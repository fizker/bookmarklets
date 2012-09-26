!function() {
	var page = $$('#page')
	page.style.width = 'auto'
	page.style.display = 'inline-block'

	$$('#imageHolder').style.maxHeight = '95vh'

	window.addEventListener('keyup', function(event) {
		switch(event.keyCode) {
			case 37:
				return prev()
			case 39:
				return next()
		}
	})

	pics.forEach(function(pic) {
		if(!pic) {
			return
		}
		var img = document.createElement('img')
		img.src = pic[0]
		img.style.position = 'fixed'
		img.style.left = '100vw'
		img.onload = function() {
			document.body.removeChild(img)
		}
		document.body.appendChild(img)
	})

	function $(sel, scope) {
		var elms = (scope || document).querySelectorAll(sel)
		return Array.prototype.slice.call(elms)
	}
	function $$(sel, scope) {
		return (scope || document).querySelector(sel)
	}
}()
