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
      d: "M4.5 6v12a3 3 0 0 0 3 3h1v-2a2 2 0 0 1 2-2h4.2a2 2 0 0 1 2 2v2h.8a3 3 0 0 0 3-3V8.8a3 3 0 0 0-.948-2.189l-2.986-2.8A3 3 0 0 0 14.514 3H7.5a3 3 0 0 0-3 3M9 6a1 1 0 0 0 0 2h6.7a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M14.7 19h-4.2v1h4.2z" })
  ]))
}