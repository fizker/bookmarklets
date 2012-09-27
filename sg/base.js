;(function extendElements() {
	Element.prototype.on = function on() {
		this.addEventListener.apply(this, arguments)
		return this
	}
	Element.prototype.remove = function remove() {
		this.parentNode.removeChild(this)
		return this
	}
	Element.prototype.append = function append(elm) {
		this.appendChild(elm)
		return this
	}
	Element.prototype.appendTo = function appendTo(elm) {
		elm.appendChild(this)
		return this
	}
})()

function $(sel, scope) {
	var elms = (scope || document).querySelectorAll(sel)
	return Array.prototype.slice.call(elms)
}
function $$(sel, scope) {
	return (scope || document).querySelector(sel)
}
