import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M7.5 1a1 1 0 0 1 1 1v1.5h-2V2a1 1 0 0 1 1-1M14.5 4h-6v1a1 1 0 0 1-2 0V4h-1a3 3 0 0 0-3 3v.5h18V7a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0zM2.5 9.5V18a3 3 0 0 0 3 3h9.358a2.998 2.998 0 0 1 3.658-2.77l.852-.851c.33-.33.718-.568 1.132-.712V9.5zM16.5 2a1 1 0 1 0-2 0v1.5h2zM22.196 20.207a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0z" })
  ]))
}