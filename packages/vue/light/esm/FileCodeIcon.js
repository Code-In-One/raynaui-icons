import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.25 1a4 4 0 0 0-4 4v9a1 1 0 1 0 2 0V5a2 2 0 0 1 2-2h6v3a4 4 0 0 0 4 4h2v9a2 2 0 0 1-2 2h-7a1 1 0 1 0 0 2h7a4 4 0 0 0 4-4V9.086a4 4 0 0 0-.927-2.56l-3.405-4.087A4 4 0 0 0 13.845 1zm11.68 7a2 2 0 0 0-.144-.194L15.381 3.72a2 2 0 0 0-.131-.143V6a2 2 0 0 0 2 2z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M4.957 16.293a1 1 0 0 1 0 1.414L3.664 19l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0M6.543 17.707a1 1 0 1 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L7.836 19z" })
  ]))
}