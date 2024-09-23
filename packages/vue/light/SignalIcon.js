const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19.25 3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0zM14.25 8a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M11.25 13a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0zM7.25 17a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" })
  ]))
}