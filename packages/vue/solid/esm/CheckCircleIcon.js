import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M15.675 10.738a1 1 0 0 0-1.35-1.475l-3.692 3.381-.958-.877a1 1 0 1 0-1.35 1.475l1.632 1.495a1 1 0 0 0 1.35 0z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0",
      "clip-rule": "evenodd"
    })
  ]))
}