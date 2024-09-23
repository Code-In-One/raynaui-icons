const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.75 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766A5 5 0 0 1 16.75 19a1 1 0 1 0 0 2 7 7 0 0 0 2.746-13.44A7.5 7.5 0 0 0 4.756 9.8 6 6 0 0 0 7.75 21a1 1 0 1 0 0-2 4 4 0 0 1-1.551-7.688 1 1 0 0 0 .602-1.058A6 6 0 0 1 6.75 9.5" }),
    _createElementVNode("path", { d: "M13.825 15.538a1 1 0 1 0-1.687-1.076l-2.231 3.5a1 1 0 0 0 .843 1.538h1.326l-1.09 2.026a1 1 0 1 0 1.76.948l1.884-3.5a1 1 0 0 0-.88-1.474h-1.177z" })
  ]))
}