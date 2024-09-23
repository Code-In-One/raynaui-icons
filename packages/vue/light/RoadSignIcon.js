const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14.002 7.708a1 1 0 0 0-1.486 1.302 4.47 4.47 0 0 0-2.267 3.889v2.875a1 1 0 0 0 2 0v-2.875c0-.594.211-1.141.563-1.569a1 1 0 0 0 1.828.09l.76-1.52a.997.997 0 0 0-.249-1.233z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.664 9.172a4 4 0 0 0 0 5.656l6.757 6.758a4 4 0 0 0 5.657 0l6.757-6.758a4 4 0 0 0 0-5.656l-6.757-6.758a4 4 0 0 0-5.657 0zm1.414 4.242a2 2 0 0 1 0-2.828l6.757-6.758a2 2 0 0 1 2.829 0l6.757 6.758a2 2 0 0 1 0 2.828l-6.757 6.758a2 2 0 0 1-2.829 0z",
      "clip-rule": "evenodd"
    })
  ]))
}