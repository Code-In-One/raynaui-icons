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
      d: "M8.25 3v2.126a4.002 4.002 0 0 1 0 7.748V21a1 1 0 1 1-2 0v-8.126a4.002 4.002 0 0 1 0-7.748V3a1 1 0 0 1 2 0m-3 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0M16.25 18.874V21a1 1 0 1 0 2 0v-2.126a4.002 4.002 0 0 0 0-7.748V3a1 1 0 1 0-2 0v8.126a4.002 4.002 0 0 0 0 7.748m3-3.874a2 2 0 1 0-4 0 2 2 0 0 0 4 0",
      "clip-rule": "evenodd"
    })
  ]))
}