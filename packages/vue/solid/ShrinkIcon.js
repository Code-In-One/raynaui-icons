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
      d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zM10 6.5a3 3 0 0 1-3 3H5a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0zm7 3a3 3 0 0 1-3-3v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2zm-7 7a3 3 0 0 0-3-3H5a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v3a1 1 0 1 0 2 0zm7-3a3 3 0 0 0-3 3v3a1 1 0 1 0 2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}