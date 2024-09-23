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
      d: "M13.64 2.204c1.33-.886 3.11.067 3.11 1.665v16.263c0 1.597-1.78 2.55-3.11 1.664l-3.879-2.587a2 2 0 0 0-.826-.315l-3.75-.536a4 4 0 0 1-3.435-3.96V9.602a4 4 0 0 1 3.434-3.96l3.75-.536a2 2 0 0 0 .827-.316zm1.11 1.665-3.88 2.586a4 4 0 0 1-1.652.631l-3.75.536a2 2 0 0 0-1.718 1.98v4.796a2 2 0 0 0 1.717 1.98l3.75.536a4 4 0 0 1 1.654.631l3.879 2.586z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M17.31 14.589a1 1 0 0 1 .601-1.28c.525-.189.839-.696.839-1.309s-.314-1.12-.839-1.31a1 1 0 0 1 .678-1.88c1.475.53 2.161 1.913 2.161 3.19s-.686 2.66-2.161 3.19a1 1 0 0 1-1.28-.601" }),
    _createElementVNode("path", { d: "M18.411 17.06a1 1 0 0 0 .678 1.88c3.142-1.131 4.661-4.089 4.661-6.94s-1.52-5.809-4.661-6.94a1 1 0 0 0-.678 1.88c2.192.79 3.339 2.872 3.339 5.06s-1.147 4.27-3.339 5.06" })
  ]))
}