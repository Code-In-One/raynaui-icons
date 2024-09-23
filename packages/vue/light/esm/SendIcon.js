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
      "fill-rule": "evenodd",
      d: "M20.62 14.28c1.965-.885 1.965-3.675 0-4.56L6.48 3.358c-1.904-.857-3.957.86-3.45 2.886l.983 3.936A2.5 2.5 0 0 0 5.836 12a2.5 2.5 0 0 0-1.823 1.82l-.984 3.936c-.506 2.026 1.547 3.743 3.451 2.886zM5.66 5.18l12.563 5.654-11.817-.762a.5.5 0 0 1-.452-.378l-.985-3.936a.5.5 0 0 1 .69-.578m.746 8.747 11.817-.763L5.66 18.82a.5.5 0 0 1-.69-.578l.984-3.936a.5.5 0 0 1 .452-.377",
      "clip-rule": "evenodd"
    })
  ]))
}