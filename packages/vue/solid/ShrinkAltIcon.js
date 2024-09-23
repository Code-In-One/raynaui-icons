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
      d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm2.222-.778a1 1 0 0 1 1.414 0l2.536 2.535V4.93a1 1 0 1 1 2 0v4.243a1 1 0 0 1-1 1H5.429a1 1 0 0 1 0-2h1.828L4.722 5.636a1 1 0 0 1 0-1.414m9.606 14.849v-4.243a1 1 0 0 1 1-1h4.243a1 1 0 1 1 0 2h-1.828l2.535 2.536a1 1 0 0 1-1.414 1.414l-2.536-2.535v1.828a1 1 0 1 1-2 0m5.95-13.435a1 1 0 1 0-1.414-1.414l-2.536 2.535V4.93a1 1 0 1 0-2 0v4.243a1 1 0 0 0 1 1h4.243a1 1 0 0 0 0-2h-1.828zM9.672 13.828H5.429a1 1 0 1 0 0 2h1.828l-2.535 2.536a1 1 0 1 0 1.414 1.414l2.536-2.535v1.828a1 1 0 1 0 2 0v-4.243a1 1 0 0 0-1-1",
      "clip-rule": "evenodd"
    })
  ]))
}