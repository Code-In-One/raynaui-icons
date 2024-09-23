const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19.207 2.293a1 1 0 1 0-1.415 1.414l.707.707-.707.707a1 1 0 0 0 1.415 1.415l.707-.708.707.708a1 1 0 1 0 1.414-1.415l-.707-.707.707-.707a1 1 0 1 0-1.414-1.414L19.914 3zM4.19 2a1 1 0 0 0 0 2c.728 0 1.364.53 1.495 1.274l.686 3.9q.01.05.023.098l.202 1.131c.566 3.162.849 4.742 1.827 5.827.363.403.788.748 1.261 1.025C10.96 18 12.622 18 15.948 18h.406c1.503 0 2.254 0 2.873-.264.502-.214.94-.55 1.269-.974.405-.522.573-1.228.91-2.64.51-2.134.764-3.2.468-4.035a3.1 3.1 0 0 0-1.34-1.621C19.759 8 18.625 8 16.355 8H8.196l-.541-3.073A3.53 3.53 0 0 0 4.189 2M11 20.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M20 20.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" })
  ]))
}