const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.75 9a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M9.25 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v1l-.001.053a9.25 9.25 0 1 1-1.997 0q-.003-.026-.002-.053V3h-1a1 1 0 0 1-1-1m3 4a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5",
      "clip-rule": "evenodd"
    })
  ]))
}