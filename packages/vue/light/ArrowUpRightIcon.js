const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.457 4.636a1 1 0 1 0 0 2h3.242L5.68 17.656a1 1 0 1 0 1.414 1.415l11.02-11.02v3.242a1 1 0 1 0 2 0V5.636a1 1 0 0 0-1-1z" })
  ]))
}