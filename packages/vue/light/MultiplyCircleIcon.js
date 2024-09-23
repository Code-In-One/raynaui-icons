const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.836 9.172a1 1 0 0 0-1.414 1.414L10.836 12l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414 1.414 1.414a1 1 0 1 0 1.414-1.414L13.664 12l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.25 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m-8 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0",
      "clip-rule": "evenodd"
    })
  ]))
}