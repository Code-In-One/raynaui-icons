const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m2.792 7.53 9.537-3.468a.5.5 0 0 1 .342 0l9.537 3.468a.5.5 0 0 1 0 .94l-9.537 3.468a.5.5 0 0 1-.342 0L2.792 8.47a.5.5 0 0 1 0-.94" }),
    _createElementVNode("path", { d: "M7.09 10.967 2.792 12.53a.5.5 0 0 0 0 .94l9.537 3.468a.5.5 0 0 0 .342 0l9.537-3.468a.5.5 0 0 0 0-.94l-4.299-1.563-5.205 1.995a.57.57 0 0 1-.409 0z" }),
    _createElementVNode("path", { d: "m2.792 16.53 2.96-1.076 6.544 2.508c.131.05.276.05.408 0l6.544-2.508 2.96 1.076a.5.5 0 0 1 0 .94l-9.537 3.468a.5.5 0 0 1-.342 0L2.792 17.47a.5.5 0 0 1 0-.94" })
  ]))
}