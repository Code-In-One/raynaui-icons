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
      d: "M1.25 5.9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V7q0 .085-.014.166A3 3 0 0 1 21.25 10v8a3 3 0 0 1-3 3h-4a3 3 0 0 1-2.8-1.92q-.096.02-.2.02h-4.2a1 1 0 1 1 0-2h2.2v-.4h-4a4 4 0 0 1-4-4zm10 8.8V10a3 3 0 0 1 3-3h3V5.9a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v6.8a2 2 0 0 0 2 2zm2-4.7a1 1 0 0 1 1-1h.27a1 1 0 0 0 .73.316h2A1 1 0 0 0 17.98 9h.27a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z",
      "clip-rule": "evenodd"
    })
  ]))
}