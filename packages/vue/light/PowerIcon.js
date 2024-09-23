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
      d: "M13.25 3a1 1 0 1 0-2 0v1.055a9.001 9.001 0 0 0 1 17.945 9 9 0 0 0 1-17.945zm-2 3.07V11a1 1 0 1 0 2 0V6.07a7.002 7.002 0 0 1-1 13.93 7 7 0 0 1-1-13.93",
      "clip-rule": "evenodd"
    })
  ]))
}