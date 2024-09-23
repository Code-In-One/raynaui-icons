const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M16.192 5.336a1 1 0 1 0-1.884-.672l-5 14a1 1 0 1 0 1.884.672zM9.582 7.445a1 1 0 0 1-.277 1.387L4.553 12l4.752 3.168a1 1 0 0 1-1.11 1.664l-6-4a1 1 0 0 1 0-1.664l6-4a1 1 0 0 1 1.387.277M15.918 7.445a1 1 0 0 0 .277 1.387L20.947 12l-4.752 3.168a1 1 0 0 0 1.11 1.664l6-4a1 1 0 0 0 0-1.664l-6-4a1 1 0 0 0-1.387.277" })
  ]))
}