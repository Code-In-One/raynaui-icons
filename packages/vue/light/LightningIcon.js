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
      d: "M13.75 3.923c0-1.29-1.758-1.671-2.292-.496l-4.49 9.876A1.2 1.2 0 0 0 8.061 15h3.69v5.077c0 1.29 1.758 1.671 2.292.496l4.489-9.876A1.2 1.2 0 0 0 17.44 9h-3.69zM9.303 13l2.447-5.383V9.8a1.2 1.2 0 0 0 1.2 1.2h3.247l-2.447 5.383V14.2a1.2 1.2 0 0 0-1.2-1.2z",
      "clip-rule": "evenodd"
    })
  ]))
}