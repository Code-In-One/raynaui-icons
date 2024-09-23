import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M7.75 4a1 1 0 1 0 0-2h-1.5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h1.5a1 1 0 1 0 0-2h-1.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" }),
    _createElementVNode("path", { d: "M22.957 12.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L19.836 11H8.25a1 1 0 1 0 0 2h11.586l-2.293 2.293a1 1 0 0 0 1.414 1.414z" })
  ]))
}