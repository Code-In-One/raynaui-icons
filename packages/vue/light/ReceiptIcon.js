const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.75 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zM7.75 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M8.75 16a1 1 0 1 0 0 2h2.667a1 1 0 1 0 0-2zM14.083 16a1 1 0 1 0 0 2h2.667a1 1 0 1 0 0-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.232 21.901q.169.043.325.12c2.386 1.193 5.193-.541 5.193-3.209V5a4 4 0 0 0-4-4h-10a4 4 0 0 0-4 4v13.812c0 2.668 2.807 4.402 5.193 3.21a1.6 1.6 0 0 1 .325-.12l2.997-.75a2 2 0 0 1 .97 0zM5.75 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13.812a1.588 1.588 0 0 1-2.299 1.42 3.6 3.6 0 0 0-.734-.271l-2.997-.75a4 4 0 0 0-1.94 0l-2.997.75q-.382.096-.734.272a1.588 1.588 0 0 1-2.299-1.421z",
      "clip-rule": "evenodd"
    })
  ]))
}