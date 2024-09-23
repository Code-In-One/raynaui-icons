const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M22.5 8a6 6 0 0 1-6.253 5.995 8.01 8.01 0 0 0-5.742-5.742A6 6 0 1 1 22.5 8" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M14.5 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-6.68 2.038a2.15 2.15 0 0 0-1.358-1.359c-.653-.217-.653-1.14 0-1.358a2.15 2.15 0 0 0 1.359-1.359c.217-.653 1.14-.653 1.358 0a2.15 2.15 0 0 0 1.359 1.359c.653.217.653 1.14 0 1.358a2.15 2.15 0 0 0-1.359 1.359c-.217.653-1.14.653-1.358 0",
      "clip-rule": "evenodd"
    })
  ]))
}