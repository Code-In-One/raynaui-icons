const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M21.329 2.96a.5.5 0 0 1 .671.47v12.14a.5.5 0 0 1-.671.47l-7.098-2.59v-7.9zM13.23 5.74v7.52l-6.925-.542A2.5 2.5 0 0 1 4 10.225v-1.45a2.5 2.5 0 0 1 2.305-2.493zM8.795 20.187l-.729-6.328 2.986.233.687 5.75a1.482 1.482 0 1 1-2.944.345" })
  ]))
}