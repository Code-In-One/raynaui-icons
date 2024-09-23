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
      d: "M3.75 7a2 2 0 0 1 2-2h11a1 1 0 1 0 0-2h-11a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-8a1 1 0 1 0-2 0v4.65l-3.656-4.571c-1.691-2.114-4.95-1.973-6.452.28l-1.14 1.71a3 3 0 0 0-3.944.977l-2.808 4.25zm12.782 4.328 5.218 6.523V18a2 2 0 0 1-2 2H9.487a1 1 0 0 1-.832-1.555l4.651-6.977a2 2 0 0 1 3.226-.14m-9.541 6.008A2.96 2.96 0 0 0 6.658 20H6.25a1 1 0 0 1-1-1v-.046a1 1 0 0 1 .166-.551l2.81-4.255a1 1 0 0 1 1.154-.396z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M5.933 8.798c.481.16.859.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 7.97 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018M21.75 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2h-1z" })
  ]))
}