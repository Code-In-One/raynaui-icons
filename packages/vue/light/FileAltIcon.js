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
      d: "M7.25 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9.086a4 4 0 0 0-.927-2.56l-3.405-4.087A4 4 0 0 0 13.845 1zm-2 4a2 2 0 0 1 2-2h6v3a4 4 0 0 0 4 4h2v9a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2zm13.68 3a2 2 0 0 0-.144-.194L15.381 3.72a2 2 0 0 0-.131-.143V6a2 2 0 0 0 2 2z",
      "clip-rule": "evenodd"
    })
  ]))
}