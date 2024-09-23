const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.24 7.18 5.497 4.437a9.976 9.976 0 0 1 13.005 0L15.759 7.18a6.115 6.115 0 0 0-7.519 0M16.82 8.24l2.742-2.743a9.976 9.976 0 0 1 0 13.006l-2.743-2.744a6.115 6.115 0 0 0 0-7.518M15.759 16.82l2.743 2.743a9.976 9.976 0 0 1-13.005 0L8.24 16.82a6.115 6.115 0 0 0 7.518 0M7.18 15.76l-2.744 2.743a9.976 9.976 0 0 1 0-13.006l2.743 2.744a6.115 6.115 0 0 0 0 7.518" }),
    _createElementVNode("path", { d: "M8.738 8.739a4.612 4.612 0 1 1 6.522 6.522 4.612 4.612 0 0 1-6.522-6.522" })
  ]))
}