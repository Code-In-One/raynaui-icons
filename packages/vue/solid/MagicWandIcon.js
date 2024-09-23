const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m21.26 19.24.582-.582a1 1 0 0 0 .049-1.362L12.586 6.56l-1.878 1.878a1 1 0 0 1-.132.11l9.221 10.64a1 1 0 0 0 1.463.052M11.273 5.044l-1.98 1.98-.02.02-1.162-1.34a1 1 0 0 1 .048-1.363l.582-.582a1 1 0 0 1 1.463.052zM4.113 8.65a1.61 1.61 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0M8.113 15.65a1.61 1.61 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018 1.61 1.61 0 0 0 1.02-1.02.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0" })
  ]))
}