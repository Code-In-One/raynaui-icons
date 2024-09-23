import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 5.414V17a1 1 0 1 0 2 0V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414z" }),
    _createElementVNode("path", { d: "M3 17.5h7.063a2 2 0 0 0 3.874 0H21V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" })
  ]))
}