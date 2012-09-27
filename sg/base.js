function _(obj) {
	var __ =
	    { obj: obj
	    , on: on
	    , remove: remove
	    , append: append
	    , appendTo: appendTo
	    , addClass: addClass
	    , removeClass: removeClass
	    , toggleClass: toggleClass
	    , forEach: forEach
	    , createElement: createElement
	    , requestFullScreen: requestFullScreen
	    }

	return __

	function forEach(func, context) {
		Array.prototype.forEach.call(obj, func, context)
		return this
	}

	function on() {
		obj.addEventListener.apply(obj, arguments)
		return this
	}

	function addClass() {
		_(arguments).forEach(function(c) {
			obj.classList.add(c)
		})
		return this
	}
	function removeClass() {
		_(arguments).forEach(function(c) {
			obj.classList.remove(c)
		})
		return this
	}
	function toggleClass() {
		_(arguments).forEach(function(c) {
			obj.classList.toggle(c)
		})
		return this
	}

	function remove() {
		obj.parentNode.removeChild(obj)
		return this
	}
	function append(elm) {
		obj.appendChild(elm.obj || elm)
		return this
	}
	function appendTo(elm) {
		(elm.obj || elm).appendChild(obj)
		return this
	}

	function requestFullScreen() {
		if(obj.requestFullScreen) {
			obj.requestFullScreen()
		} else if(obj.webkitRequestFullScreen) {
			obj.webkitRequestFullScreen()
		}
		return this
	}
}

_.createElement = createElement

var d = document.createElement('div')
function createElement(html) {
	d.innerHTML = html
	return _(d.children[0]).remove()
}

function $(sel, scope) {
	var elms = (scope || document).querySelectorAll(sel)
	return Array.prototype.slice.call(elms)
}
function $$(sel, scope) {
	return (scope || document).querySelector(sel)
}
