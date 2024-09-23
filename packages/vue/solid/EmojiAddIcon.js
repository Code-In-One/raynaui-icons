const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 3c1.77 0 3.419.51 4.81 1.392A2 2 0 0 0 18 8a2 2 0 0 0 2.743 1.857A9 9 0 1 1 12 3m-1.293 12.293a1 1 0 0 0-1.414 1.414 3.83 3.83 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.83 1.83 0 0 1-2.586 0M10.2 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15.3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M21 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2h-1z" })
  ]))
}