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
      d: "M18.5 3.5h-12a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2a3 3 0 0 1 1.8.6l1.4 1.05a3 3 0 0 0 3.6 0l1.4-1.05a3 3 0 0 1 1.8-.6 3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-12 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}