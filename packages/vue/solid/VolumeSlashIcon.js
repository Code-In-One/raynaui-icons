const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M23.207 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414zM15.5 3.868v2.304L4.46 17.212a3 3 0 0 1-1.96-2.814V9.602a3 3 0 0 1 2.576-2.97l3.75-.536a3 3 0 0 0 1.24-.474l3.88-2.586a1 1 0 0 1 1.554.832M10.066 18.377a3 3 0 0 0-.753-.362l6.187-6.187v8.303a1 1 0 0 1-1.555.832z" })
  ]))
}