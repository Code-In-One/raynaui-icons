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
      d: "M16.665 3.403a1 1 0 1 0-1.83-.806L12.75 7.335l-2.085-4.738a1 1 0 1 0-1.83.806l2.823 6.415-1.897 4.31A4 4 0 1 0 12.75 18a4 4 0 1 0 2.988-3.87l-1.897-4.31zM15.45 16.48a1 1 0 0 0 .571-.343 2 2 0 1 1-.571.343m-1.464-1.37A4 4 0 0 0 12.75 18a4 4 0 0 0-1.235-2.89L12.75 12.3zm-4.507 1.027a1 1 0 0 0 .57.343 2 2 0 1 1-.571-.343",
      "clip-rule": "evenodd"
    })
  ]))
}