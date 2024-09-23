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
      d: "M13.75 4.5a2.5 2.5 0 0 0-2.5-2.5h-6a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 2.5 2.5h6a2.5 2.5 0 0 0 2.5-2.5zm-2.5-.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5zM22.75 15.5a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5zm-2.5-.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z",
      "clip-rule": "evenodd"
    })
  ]))
}