import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.75 10a4 4 0 0 0 4-4V4a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-2a1 1 0 0 0 0 2zM18.75 10a4 4 0 0 1-4-4V4a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2zM10.75 18a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0zM18.75 14a4 4 0 0 0-4 4v2a1 1 0 1 0 2 0v-2a2 2 0 0 1 2-2h2a1 1 0 1 0 0-2z" })
  ]))
}