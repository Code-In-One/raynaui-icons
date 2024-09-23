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
      d: "M6.25 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.454L9.815 13.17 4.25 6.152zm6.814 8.744 9.186-5.911V18a2 2 0 0 1-2 2h-3.017zM12.681 20H6.25a2 2 0 0 1-2-2V9.37z",
      "clip-rule": "evenodd"
    })
  ]))
}