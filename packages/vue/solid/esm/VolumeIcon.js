import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m8.826 6.096-3.75.536A3 3 0 0 0 2.5 9.602v4.796a3 3 0 0 0 2.576 2.97l3.75.536a3 3 0 0 1 1.24.474l3.88 2.586a1 1 0 0 0 1.554-.832V3.869a1 1 0 0 0-1.555-.832l-3.879 2.586a3 3 0 0 1-1.24.473M17.06 14.59a1 1 0 0 1 .601-1.28c.525-.19.839-.697.839-1.31s-.314-1.12-.839-1.31a1 1 0 0 1 .678-1.88c1.475.53 2.161 1.913 2.161 3.19s-.686 2.66-2.161 3.19a1 1 0 0 1-1.28-.6" }),
    _createElementVNode("path", { d: "M18.161 17.06a1 1 0 0 0 .678 1.88C21.981 17.81 23.5 14.852 23.5 12s-1.52-5.808-4.661-6.94a1 1 0 0 0-.678 1.88C20.353 7.73 21.5 9.813 21.5 12s-1.147 4.27-3.339 5.06" })
  ]))
}