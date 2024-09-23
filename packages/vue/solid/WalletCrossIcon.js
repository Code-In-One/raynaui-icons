const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M16.793 16.293a3 3 0 0 1 1.153-.719A3 3 0 0 1 20.5 11h2v-.444a3 3 0 0 0-2.999-3H16l-.011-.006H7.5a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4.5 6.225V17a3 3 0 0 0 3 3h8.683q.039-.087.085-.172a3 3 0 0 1 .525-3.535" }),
    _createElementVNode("path", { d: "M22.5 13h-2a1 1 0 1 0 0 2h2zM21.743 19.828l.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.415l.707-.707.707.707a1 1 0 1 0 1.415-1.415z" })
  ]))
}