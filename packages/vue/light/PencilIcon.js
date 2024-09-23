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
      d: "M21.09 3.661a4 4 0 0 0-5.657 0l-.632.632-9.975 9.975a4 4 0 0 0-1.13 2.263l-.378 2.64a2 2 0 0 0 2.263 2.262l2.64-.377a4 4 0 0 0 2.262-1.131l9.975-9.975.632-.632a4 4 0 0 0 0-5.657m-1.414 1.414a2 2 0 0 1 .073 2.752l-2.824-2.825a2 2 0 0 1 2.75.073m-4.167 1.34 2.828 2.828-9.268 9.268a2 2 0 0 1-1.131.565l-2.64.377.377-2.64a2 2 0 0 1 .566-1.13z",
      "clip-rule": "evenodd"
    })
  ]))
}