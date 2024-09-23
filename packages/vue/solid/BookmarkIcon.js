const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M4 5.301C4 3.478 5.535 2 7.429 2h9.142C18.465 2 20 3.478 20 5.301v14.494c0 2.095-2.754 3.005-4.09 1.351l-2.557-3.165c-.686-.85-2.02-.85-2.706 0L8.09 21.146C6.754 22.8 4 21.89 4 19.795z" })
  ]))
}