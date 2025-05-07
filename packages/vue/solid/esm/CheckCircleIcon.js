import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m3.675-10.262a1 1 0 0 0-1.35-1.475l-3.692 3.381-.958-.877a1 1 0 1 0-1.35 1.475l1.632 1.495a1 1 0 0 0 1.35 0z",
      "clip-rule": "evenodd"
    })
  ]))
}