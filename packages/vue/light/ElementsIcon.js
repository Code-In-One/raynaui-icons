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
      d: "M4.75 11.5A2.5 2.5 0 0 1 2.25 9V4a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5zM4.25 9a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5zM8.426 13.194a2.37 2.37 0 0 0-3.352 0l-2.63 2.63a2.37 2.37 0 0 0 0 3.352l2.63 2.63a2.37 2.37 0 0 0 3.352 0l2.63-2.63a2.37 2.37 0 0 0 0-3.352zm-1.938 1.414a.37.37 0 0 1 .524 0l2.63 2.63a.37.37 0 0 1 0 .524l-2.63 2.63a.37.37 0 0 1-.524 0l-2.63-2.63a.37.37 0 0 1 0-.524zM13.25 20a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5zm2.5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5zM13.25 6.5a5 5 0 1 0 10 0 5 5 0 0 0-10 0m5-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6",
      "clip-rule": "evenodd"
    })
  ]))
}