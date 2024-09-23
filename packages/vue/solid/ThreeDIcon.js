const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.5 3.235 5.223 6.19A3 3 0 0 0 3.5 8.904v5.978l7.211-3.605q.383-.191.789-.296zM13.5 10.981q.406.105.789.296l7.211 3.605V8.904a3 3 0 0 0-1.723-2.715L13.5 3.235zM11.606 13.065 4.76 16.488l7.213 3.394a1.24 1.24 0 0 0 1.054 0l7.213-3.394-6.846-3.423a2 2 0 0 0-1.788 0" })
  ]))
}