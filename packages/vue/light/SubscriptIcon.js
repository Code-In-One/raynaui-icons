const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3.25 5 5.606 8.154m0 0L14.25 21m-5.394-7.846L14.25 5m-5.394 8.154L3.666 21M17.25 21v-2a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v2"
    })
  ]))
}