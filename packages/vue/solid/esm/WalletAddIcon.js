import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17.629 17.129q.096-.317.256-.6A3 3 0 0 1 19.5 11h2v-.444a3 3 0 0 0-2.999-3H15l-.011-.006H6.5a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 3.5 6.225V17a3 3 0 0 0 3 3h9c0-1.354.897-2.498 2.128-2.872" }),
    _createElementVNode("path", { d: "M21.5 15h-2a1 1 0 1 1 0-2h2zM21.5 18a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z" })
  ]))
}