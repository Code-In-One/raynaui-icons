const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.39 10.145a.665.665 0 1 0-.869-1.002l-.564.564a1 1 0 0 1-1.414-1.414l.564-.564a2.665 2.665 0 1 1 3.483 4.016l-.048.036a.73.73 0 0 0-.292.583v.136a1 1 0 1 1-2 0v-.136c0-.859.404-1.667 1.092-2.183zM11.25 15.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16",
      "clip-rule": "evenodd"
    })
  ]))
}