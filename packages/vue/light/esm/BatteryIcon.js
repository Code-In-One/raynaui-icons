import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.75 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M10.75 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM12.75 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M16.75 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.25 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v.208a2.5 2.5 0 0 1 1.5 2.292v1a2.5 2.5 0 0 1-1.5 2.292V15a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4zm16 6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
      "clip-rule": "evenodd"
    })
  ]))
}