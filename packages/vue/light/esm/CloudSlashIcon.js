import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m2.957 22.707 20-20a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414M17.825 9.253l1.529-1.529A7 7 0 0 1 16.25 21h-9a6 6 0 0 1-1.075-.096L8.078 19h8.172a5 5 0 0 0 1.575-9.747M1.25 15c0 1.446.511 2.772 1.363 3.808l1.425-1.424a4.001 4.001 0 0 1 1.661-6.072 1 1 0 0 0 .602-1.058 5.5 5.5 0 0 1 9.423-4.557l1.414-1.414A7.5 7.5 0 0 0 4.256 9.8 6 6 0 0 0 1.25 15" })
  ]))
}