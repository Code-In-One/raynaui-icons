import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.5 4h14a3 3 0 0 1 3 3 1 1 0 0 0-.371.072l-8.886 3.554a2 2 0 0 1-1.486 0L2.871 7.072A1 1 0 0 0 2.5 7a3 3 0 0 1 3-3" }),
    _createElementVNode("path", { d: "M2.5 9.077V17a3 3 0 0 0 3 3h10c0-1.354.897-2.498 2.128-2.872a3 3 0 0 1 4.872-1.364V9.077l-8.514 3.406a4 4 0 0 1-2.972 0z" }),
    _createElementVNode("path", { d: "M21.5 18a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z" })
  ]))
}