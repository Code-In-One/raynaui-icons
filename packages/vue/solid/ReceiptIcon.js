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
      d: "M4.5 18.812V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v13.812c0 1.924-2.025 3.176-3.746 2.315a2.6 2.6 0 0 0-.53-.196l-2.996-.75a3 3 0 0 0-1.456 0l-2.996.75q-.276.07-.53.196c-1.721.86-3.746-.39-3.746-2.315M8.5 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h2.667a1 1 0 1 0 0-2zm5.333 0a1 1 0 1 0 0 2H16.5a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}