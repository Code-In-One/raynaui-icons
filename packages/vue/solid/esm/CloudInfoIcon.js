import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M21.5 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M2.5 15a5 5 0 0 0 5 5h9a6 6 0 0 0 1.89-11.696A6.5 6.5 0 0 0 5.56 10.39 5 5 0 0 0 2.5 15M20.5 7.25a1 1 0 1 0 2 0 1 1 0 0 0-2 0" })
  ]))
}