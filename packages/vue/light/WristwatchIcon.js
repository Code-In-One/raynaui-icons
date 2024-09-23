const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.75 10a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-1z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.25 6v1.528a5.99 5.99 0 0 1 2 4.472 5.99 5.99 0 0 1-2 4.472V18a4 4 0 0 1-8 0v-1.528a5.99 5.99 0 0 1-2-4.472c0-1.778.774-3.375 2-4.472V6a4 4 0 0 1 8 0m-6 0a2 2 0 1 1 4 0v.342a6 6 0 0 0-2-.342c-.7 0-1.374.12-2 .342zm2 12c.7 0 1.374-.12 2-.342V18a2 2 0 1 1-4 0v-.342a6 6 0 0 0 2 .342m-2.4-9.2a3.98 3.98 0 0 1 2.4-.8c.902 0 1.731.297 2.4.8a4 4 0 0 1 1.6 3.2c0 1.308-.627 2.47-1.6 3.2-.669.503-1.498.8-2.4.8a3.98 3.98 0 0 1-2.4-.8 4 4 0 0 1-1.6-3.2c0-1.308.627-2.47 1.6-3.2",
      "clip-rule": "evenodd"
    })
  ]))
}