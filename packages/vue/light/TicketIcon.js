const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.75 6.5a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0zM7.75 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M8.75 15.5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M23.25 17v-.292a4 4 0 0 0-.423-1.789l-.904-1.809a2 2 0 0 1 .124-2.004l.53-.796a4 4 0 0 0 .673-2.218V7a4 4 0 0 0-4-4H5.624A3.979 3.979 0 0 0 2.25 9.087l1.158 1.853a2 2 0 0 1 0 2.12l-1.05 1.68a4 4 0 0 0-.608 2.12V17a4 4 0 0 0 4 4h13.5a4 4 0 0 0 4-4m-2-.292V17a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2v-.14a2 2 0 0 1 .304-1.06l1.05-1.68a4 4 0 0 0 0-4.24L3.946 8.027A1.979 1.979 0 0 1 5.624 5H19.25a2 2 0 0 1 2 2v1.092a2 2 0 0 1-.336 1.11l-.53.795a4 4 0 0 0-.25 4.007l.904 1.81a2 2 0 0 1 .212.894",
      "clip-rule": "evenodd"
    })
  ]))
}