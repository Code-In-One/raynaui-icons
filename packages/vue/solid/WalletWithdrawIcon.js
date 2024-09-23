const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 17c0-.379.07-.742.198-1.075A3 3 0 0 1 19.5 11h2v-.445a3 3 0 0 0-2.999-3H15l-.011-.006H6.5a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 3.5 6.225V17a3 3 0 0 0 3 3h9.074c.109-.477.336-.935.684-1.326.22-.247.47-.45.742-.606z" }),
    _createElementVNode("path", { d: "M20 14c.546 0 1.059.146 1.5.401V13h-2a1 1 0 0 0-.932 1.363A3 3 0 0 1 20 14M22.164 21.414l-1.5 1.333a1 1 0 0 1-1.328 0l-1.5-1.333A1 1 0 0 1 19 19.8V17a1 1 0 1 1 2 0v2.8a1 1 0 0 1 1.164 1.614" })
  ]))
}