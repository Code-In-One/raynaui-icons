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
      d: "M8.039 18C7.593 4.862 11.14 2.555 12.5 2.008c1.359.547 4.907 2.854 4.462 15.992-3.462-3-5.462-3-8.923 0M14 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M7 13c-1.148.167-2.894 2.6-2.5 7 1.182 0 1.717-.838 2.12-1.473.135-.211.255-.4.38-.527zM18 13c1.149.167 2.894 2.6 2.5 7-1.182 0-1.716-.838-2.12-1.473-.135-.211-.255-.4-.38-.527zM12.5 22.5s-1.333-2-1.5-3c0 0 .796-1 1.5-1s1.5 1 1.5 1c-.333 1.333-1.5 3-1.5 3" })
  ]))
}