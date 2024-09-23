import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M2.056 4.53A1 1 0 1 0 3.47 5.945L5.945 3.47A1 1 0 0 0 4.53 2.056zM12.25 9a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.25 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m-8 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M18.543 2.293a1 1 0 0 1 1.414 0l2.475 2.475a1 1 0 0 1-1.414 1.414l-2.475-2.475a1 1 0 0 1 0-1.414" })
  ]))
}