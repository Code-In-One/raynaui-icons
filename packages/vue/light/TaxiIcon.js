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
      d: "M10.25 2a1 1 0 0 0-.894.553L8.632 4h-1.94a3 3 0 0 0-2.847 2.051L2.806 9.17a1 1 0 0 0-1.263 1.538l.1.101A2 2 0 0 0 1.25 12v3.5a2.5 2.5 0 0 0 1.5 2.292V19a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-1h6v1a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-1.208a2.5 2.5 0 0 0 1.5-2.292V12c0-.447-.146-.86-.394-1.192l.101-.1a1 1 0 0 0-1.263-1.54l-1.04-3.117A3 3 0 0 0 17.809 4h-1.94l-.724-1.447A1 1 0 0 0 14.25 2zM5.743 6.684 4.637 10h15.226l-1.106-3.316A1 1 0 0 0 17.808 6H6.692a1 1 0 0 0-.95.684M3.75 16a.5.5 0 0 1-.5-.5V12h18v3.5a.5.5 0 0 1-.5.5h-17m1 3v-1h2.5v1zm12.5 0v-1h2.5v1z",
      "clip-rule": "evenodd"
    })
  ]))
}