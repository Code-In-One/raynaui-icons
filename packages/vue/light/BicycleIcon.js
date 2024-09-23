const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.75 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1.667L7.25 7h6.634a1 1 0 0 1 .866-1.5h3.5a1 1 0 1 1 0 2h-.965l-.452.679.887 3.328q.14-.007.28-.007a5.25 5.25 0 1 1-4.766 3.046l-2.8-1.273a5.25 5.25 0 1 1-4.683-1.72v-3.22L4.449 6.6a1 1 0 0 1-.2-.6V5h-.5a1 1 0 0 1-1-1m13.03 7.991a5.3 5.3 0 0 0-1.344.904L7.75 9.856V9h7.232zm-.725 3.383a3.25 3.25 0 1 0 3.2-1.864l.461 1.732a1 1 0 0 1-1.38 1.168zM5.75 15.5v-1.913a3.251 3.251 0 1 0 2 .162V15.5a1 1 0 1 1-2 0",
      "clip-rule": "evenodd"
    })
  ]))
}