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
      d: "M19.75 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-14a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zm-16-4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.477l-7.514 3.006a4 4 0 0 1-2.971 0L3.75 9.477zm9.743-6.374 8.257-3.303V7a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v.323l8.258 3.303a2 2 0 0 0 1.485 0",
      "clip-rule": "evenodd"
    })
  ]))
}