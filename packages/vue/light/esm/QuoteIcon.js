import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.25 10.34V7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5.29c0 .224-.024.444-.085.659-.332 1.16-1.684 5.118-5.022 6.487-.813.334-1.673.482-2.433.537-.87.063-1.25-1.064-.8-1.812.177-.297.345-.63.483-.995.217-.574.33-1.139.385-1.63.108-.967-.507-1.812-1.372-2.257l-.527-.27a3 3 0 0 1-1.629-2.668"
    })
  ]))
}