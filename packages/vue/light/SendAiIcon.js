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
      d: "M21.122 9.72c1.965.885 1.965 3.675 0 4.56l-14.14 6.362c-1.904.857-3.957-.86-3.45-2.886l.983-3.936A2.5 2.5 0 0 1 6.338 12a2.5 2.5 0 0 1-1.823-1.82l-.984-3.936C3.025 4.218 5.078 2.5 6.982 3.358zm-2.397 1.115L6.162 5.181a.5.5 0 0 0-.69.578l.983 3.936a.5.5 0 0 0 .453.378zm0 2.33-11.817.763a.5.5 0 0 0-.453.377l-.984 3.936a.5.5 0 0 0 .69.578z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M17.344 5.63c.481.161.858.539 1.019 1.02.163.49.856.49 1.019 0 .16-.481.538-.859 1.019-1.02a.537.537 0 0 0 0-1.018 1.61 1.61 0 0 1-1.02-1.02.537.537 0 0 0-1.018 0 1.61 1.61 0 0 1-1.02 1.02.537.537 0 0 0 0 1.019" })
  ]))
}