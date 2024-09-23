const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m10.102 7.477-5.686 2.841c-1.221.61-1.221 2.353 0 2.964l5.686 2.841a1.657 1.657 0 0 0 2.398-1.482v-2.839c0 .588.306 1.175.916 1.48l5.686 2.841a1.657 1.657 0 0 0 2.398-1.482V8.96a1.657 1.657 0 0 0-2.398-1.482l-5.686 2.841c-.61.305-.915.892-.916 1.48v-2.84a1.657 1.657 0 0 0-2.398-1.48" })
  ]))
}