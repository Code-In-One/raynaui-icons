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
      d: "M12.25 1a3 3 0 0 0-3 3v3.465L4.14 10.87a2 2 0 0 0-.89 1.664v2.078a2 2 0 0 0 2.632 1.897l3.368-1.123v2.199l-2 2C5.99 20.846 6.882 23 8.664 23h1.463q.245 0 .485-.06l1.638-.41 1.638.41q.24.06.485.06h1.463c1.782 0 2.674-2.154 1.414-3.414l-2-2v-2.199l3.367 1.123a2 2 0 0 0 2.633-1.897v-2.078a2 2 0 0 0-.89-1.664l-5.11-3.406V4a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0v3.465a2 2 0 0 0 .89 1.664l5.11 3.406v2.078l-3.367-1.123a2 2 0 0 0-2.633 1.897v2.199A2 2 0 0 0 13.836 19l2 2h-1.463l-1.638-.41a2 2 0 0 0-.97 0l-1.638.41H8.664l2-2a2 2 0 0 0 .586-1.414v-2.199a2 2 0 0 0-2.632-1.897L5.25 14.613v-2.078l5.11-3.406a2 2 0 0 0 .89-1.664z",
      "clip-rule": "evenodd"
    })
  ]))
}