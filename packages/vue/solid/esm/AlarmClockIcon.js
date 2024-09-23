import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M2.306 4.53A1 1 0 1 0 3.72 5.945L6.195 3.47A1 1 0 0 0 4.78 2.056zM18.793 2.293a1 1 0 0 1 1.414 0l2.475 2.475a1 1 0 0 1-1.414 1.414l-2.475-2.475a1 1 0 0 1 0-1.414" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-12a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2z",
      "clip-rule": "evenodd"
    })
  ]))
}