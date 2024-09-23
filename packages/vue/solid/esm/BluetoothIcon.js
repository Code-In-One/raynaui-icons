import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M15.697 16 12.5 18.131v-4.263zM12.5 5.869v4.263L15.697 8z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3.5 19V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3M13.61 4.204c-1.33-.886-3.11.067-3.11 1.665v4.05l-2.375-1.9a1 1 0 1 0-1.25 1.562L9.9 12l-3.024 2.42a1 1 0 0 0 1.25 1.56l2.375-1.9v4.051c0 1.598 1.78 2.55 3.11 1.665l3.197-2.132a2 2 0 0 0 0-3.328L13.303 12l3.504-2.336a2 2 0 0 0 0-3.328z",
      "clip-rule": "evenodd"
    })
  ]))
}