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
      d: "M3.5 5.5v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3h.683a4.317 4.317 0 0 0 4.317-4.317v-2.321c0-1.876-1.446-3.097-2.81-3.539-.696-.226-1.473-.291-2.19-.104V5.5a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1m15 4.396V15.5h.683a2.317 2.317 0 0 0 2.317-2.317v-2.321c0-.71-.564-1.357-1.426-1.636-.413-.134-.797-.144-1.073-.07-.255.067-.392.191-.466.363-.015.034-.035.118-.035.377",
      "clip-rule": "evenodd"
    })
  ]))
}