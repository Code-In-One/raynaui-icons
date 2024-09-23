const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3.75 10a1 1 0 0 1-1-1c0-2.49.839-4.267 2.066-5.417a5.9 5.9 0 0 1 1.222-.88 1 1 0 0 1 1.16-1.597l2 1a1 1 0 0 1 .446 1.341l-1 2a1 1 0 0 1-1.788-.894l.01-.02a4 4 0 0 0-.682.509C5.41 5.766 4.75 6.989 4.75 9a1 1 0 0 1-1 1M6.54 16.508a2.15 2.15 0 0 1 1.36 1.358c.217.653 1.14.653 1.358 0a2.15 2.15 0 0 1 1.358-1.358c.653-.218.653-1.141 0-1.359a2.15 2.15 0 0 1-1.358-1.358c-.218-.653-1.141-.653-1.359 0a2.15 2.15 0 0 1-1.359 1.358c-.652.218-.652 1.141 0 1.359" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M9.25 8.5q0 .522.075 1.025a6.5 6.5 0 1 0 5.9 5.9q.503.075 1.025.075a7 7 0 1 0-7-7m7-5a5 5 0 0 0-4.733 6.617 6.53 6.53 0 0 1 3.116 3.116A5 5 0 1 0 16.25 3.5m-7.5 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M22.75 15a1 1 0 1 0-2 0c0 2.01-.661 3.233-1.434 3.958-.215.202-.445.37-.682.51l.01-.02a1 1 0 1 0-1.788-.895l-1 2a1 1 0 0 0 .447 1.341l2 1a1 1 0 0 0 1.159-1.597 5.9 5.9 0 0 0 1.222-.88c1.227-1.15 2.066-2.928 2.066-5.417" })
  ]))
}