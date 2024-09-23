import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M16.968 9.696a1 1 0 0 0-1.436-1.392l-5.105 5.26-1.46-1.503a1 1 0 0 0-1.435 1.393l2.177 2.242a1 1 0 0 0 1.435 0z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.25 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}