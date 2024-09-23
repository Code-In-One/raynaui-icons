const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 3c-5.523 0-10 4.477-10 10v5a1 1 0 0 0 1.11.994 1.589 1.589 0 0 0 3.066-.582V16.25c0-1.295-1.239-1.836-2.176-1.503V13a8 8 0 1 1 16 0v1.738c-.936-.334-2.177.205-2.177 1.5v2.174a1.588 1.588 0 0 0 3.067.582A1 1 0 0 0 22.5 18v-5c0-5.523-4.477-10-10-10" })
  ]))
}