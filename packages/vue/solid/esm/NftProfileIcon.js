import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 14.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.5 21.995a3 3 0 0 0 2.445-1.538l3.889-7a3 3 0 0 0 0-2.914l-3.89-7A3 3 0 0 0 16.323 2H8.676a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7a3 3 0 0 0 2.346 1.53V22h8.1zM8.675 4a1 1 0 0 0-.874.514l-3.889 7a1 1 0 0 0 0 .972l3.024 5.443C8.232 17.19 10.62 15.99 12.5 16c1.886.011 4.283 1.245 5.537 1.975l3.05-5.49a1 1 0 0 0 0-.97l-3.89-7A1 1 0 0 0 16.323 4z",
      "clip-rule": "evenodd"
    })
  ]))
}