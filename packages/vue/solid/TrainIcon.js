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
      "fill-rule": "evenodd",
      d: "M20.5 16a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-6a8 8 0 1 1 16 0zm-3-3v-3a5 5 0 0 0-10 0v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2m-7 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}