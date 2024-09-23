import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.75 3.923v4.249l-1.955 1.955a1.2 1.2 0 0 1-.045-.327V7.617L9.621 12.3l-2.378 2.378a1.2 1.2 0 0 1-.275-1.376l4.49-9.876c.534-1.175 2.292-.794 2.292.496M15.88 11.7l2.377-2.379c.357.334.502.876.275 1.376l-4.49 9.876c-.533 1.175-2.292.794-2.292-.496v-4.249l1.955-1.955a1.2 1.2 0 0 1 .045.327v2.183zM21.457 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414z" })
  ]))
}