const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.544 3.144 6.814 13.74a.5.5 0 0 0 .457.704h4.73a.5.5 0 0 1 .5.5v5.708c0 .54.736.696.956.204l4.73-10.598a.5.5 0 0 0-.457-.703H13a.5.5 0 0 1-.5-.5V3.347c0-.54-.736-.696-.956-.203" })
  ]))
}