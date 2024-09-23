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
      d: "M16.75 3.869c0-1.598-1.78-2.55-3.11-1.665L9.762 4.79a2 2 0 0 1-.826.316l-3.75.536a4 4 0 0 0-3.435 3.96v4.796a4 4 0 0 0 3.434 3.96l3.75.536c.297.042.579.15.827.316l3.88 2.586c1.329.886 3.109-.067 3.109-1.665zm-5.88 2.586 3.88-2.586v16.263l-3.88-2.587a4 4 0 0 0-1.652-.631l-3.75-.536a2 2 0 0 1-1.718-1.98V9.602a2 2 0 0 1 1.717-1.98l3.75-.536a4 4 0 0 0 1.654-.631",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "m21.993 11.828.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.708a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.415-1.414z" })
  ]))
}