const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.25 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766A5 5 0 0 1 16.25 19a1 1 0 1 0 0 2 7 7 0 0 0 2.746-13.44A7.5 7.5 0 0 0 4.256 9.8 6 6 0 0 0 7.25 21a1 1 0 1 0 0-2 4 4 0 0 1-1.551-7.688 1 1 0 0 0 .602-1.058A6 6 0 0 1 6.25 9.5" }),
    _createElementVNode("path", { d: "M11.586 14.253a1 1 0 0 1 1.328 0l1.5 1.333A1 1 0 0 1 13.25 17.2V22a1 1 0 1 1-2 0v-4.8a1 1 0 0 1-1.164-1.614z" })
  ]))
}