const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6 6q0 .085.014.166a3.001 3.001 0 0 0 0 5.668Q5.999 11.915 6 12v9a1 1 0 1 0 2 0v-9q0-.084-.014-.166a3.001 3.001 0 0 0 0-5.668Q8 6.084 8 6V3a1 1 0 0 0-2 0zM16.014 17.834q-.015.081-.014.166v3a1 1 0 1 0 2 0v-3q0-.085-.014-.166a3.001 3.001 0 0 0 0-5.668q.015-.081.014-.166V3a1 1 0 1 0-2 0v9q0 .084.014.166a3.001 3.001 0 0 0 0 5.668" })
  ]))
}