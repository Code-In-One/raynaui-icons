const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.75 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2M9.75 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14.75 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "m21.228 13.448-2.482.31q.004.12.004.242a8 8 0 0 1-9.92 7.768l-4.3-.538a1.875 1.875 0 0 1-1.617-2.168l.264-1.583-.195-1.558a8 8 0 0 1 8.107-9.914 6.002 6.002 0 0 1 11.49 3.417l-.131 1.055.181 1.09a1.625 1.625 0 0 1-1.401 1.879M16.75 4a4 4 0 0 1 3.876 4.993l-.016.06-.154 1.233q-.029.234.01.468l.126.758-2.154.27a8.02 8.02 0 0 0-5.334-5.43A4 4 0 0 1 16.75 4m-6 4a6 6 0 0 0-5.814 7.49l.016.06.212 1.7q.034.27-.011.54l-.245 1.472 4.292.537.06.015A6 6 0 1 0 10.75 8",
      "clip-rule": "evenodd"
    })
  ]))
}