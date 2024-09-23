const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M23.207 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.5 5.17c-.312-.11-.65-.17-1-.17h-10a3 3 0 0 0-3 3v8c0 .872.372 1.657.966 2.205zM6.113 10.65a1.61 1.61 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M8.328 19H15.5a3 3 0 0 0 3-3v-1l2.4 1.8a1 1 0 0 0 1.6-.8V8a1 1 0 0 0-1.6-.8L18.5 9v-.172z" })
  ]))
}