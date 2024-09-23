const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M9.5 8h-2v2h2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M15.5 3h-10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12V5a2 2 0 0 0-2-2m-10 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm6-2a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm-8 1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M18.5 21h2.4c.884 0 1.6-.895 1.6-2v-2c0-1.105-.716-2-1.6-2h-2.4z" })
  ]))
}