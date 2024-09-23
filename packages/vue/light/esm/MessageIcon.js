import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.75 8.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M7.75 11.5a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "m16.15 19.95 1.4-1.05a2 2 0 0 1 1.2-.4 4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4h-12a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h2a2 2 0 0 1 1.2.4l1.4 1.05a4 4 0 0 0 4.8 0m2.6-3.45a4 4 0 0 0-2.4.8l-1.4 1.05a2 2 0 0 1-2.4 0l-1.4-1.05a4 4 0 0 0-2.4-.8h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2",
      "clip-rule": "evenodd"
    })
  ]))
}