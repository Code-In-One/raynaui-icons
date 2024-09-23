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
      d: "M15.197 2.474a4 4 0 0 0-5.464 1.464L7.687 7.48a2 2 0 0 1-.846.793l-1.521.752c-1.79.886-1.871 3.408-.142 4.407l3.635 2.098-3.25 5.63a1 1 0 0 0 1.732 1l3.25-5.63 3.635 2.099c1.729.998 3.873-.334 3.744-2.326l-.109-1.694a2 2 0 0 1 .264-1.129l2.046-3.543a4 4 0 0 0-1.464-5.464zm-4.505 11.833 4.488 2.59a.5.5 0 0 0 .749-.464l-.11-1.694a4 4 0 0 1 .528-2.258l2.046-3.543a2 2 0 0 0-.732-2.732l-3.464-2a2 2 0 0 0-2.732.732L9.419 8.48a4 4 0 0 1-1.691 1.586l-1.522.752a.5.5 0 0 0-.028.881l4.487 2.592.014.007z",
      "clip-rule": "evenodd"
    })
  ]))
}