const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M7.701 9.817a1.61 1.61 0 0 0-1.019-1.019.537.537 0 0 1 0-1.019c.481-.16.859-.538 1.019-1.019a.537.537 0 0 1 1.019 0c.16.481.538.859 1.019 1.02.49.163.49.855 0 1.018-.481.16-.859.538-1.019 1.02a.537.537 0 0 1-1.019 0" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.5 21.995a3 3 0 0 0 2.445-1.538l3.889-7a3 3 0 0 0 0-2.914l-3.89-7A3 3 0 0 0 16.323 2H8.676a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7a3 3 0 0 0 2.346 1.53V22h8.1zM8.675 4a1 1 0 0 0-.874.514l-3.889 7a1 1 0 0 0 0 .972l3.008 5.413 2.733-3.908a2 2 0 0 1 2.624-.594l1.078.666 1.022-1.46a2 2 0 0 1 2.748-.517l2.354 1.59c.25.168.45.384.596.627l1.01-1.817a1 1 0 0 0 0-.972l-3.89-7A1 1 0 0 0 16.323 4z",
      "clip-rule": "evenodd"
    })
  ]))
}