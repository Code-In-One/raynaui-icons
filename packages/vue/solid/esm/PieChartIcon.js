import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 21c4.633 0 8.449-3.501 8.945-8.002.06-.549-.393-.998-.945-.998h-5a3 3 0 0 1-3-3V4c0-.553-.45-1.006-.998-.945A9.001 9.001 0 0 0 12.5 21" }),
    _createElementVNode("path", { d: "M22.43 8.003a7 7 0 0 0-5.933-5.933c-.547-.078-.997.377-.997.93v5a1 1 0 0 0 1 1h5c.552 0 1.008-.45.93-.997" })
  ]))
}