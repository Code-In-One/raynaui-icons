import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("g", { "clip-path": "url(#a)" }, [
      _createElementVNode("path", {
        stroke: "#000",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M11.926 16.652c-1.08-1.26-2.848-3.16-4.571-4.54a.93.93 0 0 0-.963-.123c-2.943 1.353-2.272 2.938-1.602 8.97.176 1.584 3.076-.995 6.888-3.07.454-.247.584-.845.248-1.238Zm0 0c2.778-2.779 8.977-9.685 10.033-13.449.15-.531-.297-.966-.82-.79-3.435 1.152-10.524 7.192-13.44 9.98"
      })
    ]),
    _createElementVNode("defs", null, [
      _createElementVNode("clipPath", { id: "a" }, [
        _createElementVNode("path", { d: "M.75 0h24v24h-24z" })
      ])
    ])
  ]))
}