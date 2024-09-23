const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M2.75 6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2h-2a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0zM22.75 6a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0zM6.75 22a4 4 0 0 1-4-4v-2a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2zM22.75 18a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.75 6c-.33 0-.656.073-.955.213L9.047 7.507a4 4 0 0 0-2.297 3.619v3.242c0 .638.368 1.218.945 1.489l4.1 1.93a2.24 2.24 0 0 0 1.91 0l4.1-1.93c.577-.271.945-.851.945-1.489v-3.242a4 4 0 0 0-2.297-3.62l-2.748-1.293A2.24 2.24 0 0 0 12.75 6m1 5.159V8.445l1.852.871a2 2 0 0 1 1.148 1.81v1.851zm-.897 4.818 2.808-1.321-2.911-1.764-2.91 1.764 2.807 1.32a.24.24 0 0 0 .206 0M11.75 8.445v2.714l-3 1.818v-1.851a2 2 0 0 1 1.148-1.81z",
      "clip-rule": "evenodd"
    })
  ]))
}