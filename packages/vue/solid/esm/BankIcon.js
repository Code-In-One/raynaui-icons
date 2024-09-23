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
      d: "m12.184 3.106-8 2.666a1 1 0 0 0-.684.949V9a1 1 0 0 0 1 1h1v7h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1v-7h1a1 1 0 0 0 1-1V6.72a1 1 0 0 0-.684-.949l-8-2.666a1 1 0 0 0-.632 0M17.5 17v-7h-2v7zm-4 0v-7h-2v7zm-4 0v-7h-2v7z",
      "clip-rule": "evenodd"
    })
  ]))
}