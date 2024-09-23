import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.25 16a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM5.25 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M13.25 10a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM12.25 8a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.25 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 2h2v2h-2z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.25 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3zm15 18h-2v-4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m-4 0h-11a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z",
      "clip-rule": "evenodd"
    })
  ]))
}