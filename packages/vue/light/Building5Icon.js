const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.25 7a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1M13.25 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM10.25 13a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M13.25 8a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM10.25 10a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M13.25 14a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM10.25 16a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M13.25 17a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M4.75 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h3a2 2 0 0 1 2 2v8h1a1 1 0 1 1 0 2h-20a1 1 0 1 1 0-2h2zm2 14h8V5h-8zm13-4v-1h-.5a1 1 0 1 1 0-2h.5v-1h-3v8h3v-2h-.5a1 1 0 1 1 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}