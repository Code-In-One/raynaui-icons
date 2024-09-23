const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5 4.5a2.5 2.5 0 0 0 1.52 2.3q-.02.098-.02.2v9.208a2.5 2.5 0 1 0 2 0V13.42c.302.539.632 1.074.986 1.593.882 1.294 1.933 2.517 3.092 3.427 1.15.903 2.489 1.56 3.922 1.56a2.5 2.5 0 1 0-.442-2.036c-.7-.11-1.456-.478-2.245-1.097-.95-.747-1.869-1.799-2.674-2.98a19.4 19.4 0 0 1-1.937-3.612C8.727 9.09 8.5 8.112 8.5 7.5V7q0-.102-.02-.2A2.5 2.5 0 1 0 5 4.5" })
  ]))
}