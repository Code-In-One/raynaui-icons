const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18.25 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M15.25 9a1 1 0 1 0-2 0v12a1 1 0 0 0 2 0zM10.25 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M6.25 16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M6.371 4.707a1 1 0 1 0-1.414 1.414l.707.707-.707.707A1 1 0 1 0 6.371 8.95l.707-.707.707.707A1 1 0 0 0 9.2 7.535l-.708-.707.708-.707a1 1 0 0 0-1.415-1.414l-.707.707z" })
  ]))
}