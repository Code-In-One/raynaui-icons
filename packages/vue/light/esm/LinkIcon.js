import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M20.029 4.222a5 5 0 0 0-7.071 0L10.129 7.05a1 1 0 0 0 1.414 1.415l2.829-2.829a3 3 0 1 1 4.242 4.243l-2.828 2.828a1 1 0 0 0 1.414 1.414l2.829-2.828a5 5 0 0 0 0-7.071" }),
    _createElementVNode("path", { d: "M14.372 11.293a1 1 0 0 0-1.414-1.414l-2.829 2.828a1 1 0 0 0 1.414 1.414z" }),
    _createElementVNode("path", { d: "M8.715 11.293A1 1 0 0 0 7.3 9.879l-2.829 2.828a5 5 0 0 0 7.071 7.071l2.829-2.828a1 1 0 0 0-1.414-1.414l-2.829 2.828a3 3 0 1 1-4.243-4.243z" })
  ]))
}