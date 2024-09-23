import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m6.593 3.373.544 2.176q.03.117.03.239v2.545a5.335 5.335 0 0 0 4.333 5.24v6.08C10.416 18.259 8.308 17 4.5 17c1.256 3.926 5.698 5.176 7.879 5.326q.06.007.12.007h.003q.06 0 .119-.007c2.181-.15 6.623-1.4 7.879-5.326-3.808 0-5.916 1.259-7 2.653v-6.08a5.335 5.335 0 0 0 4.333-5.24V5.788q0-.12.03-.239l.537-2.15a.209.209 0 0 0-.279-.242c-.911.361-3.322 1.217-5.621 1.176-2.13-.037-4.706-.873-5.64-1.202a.205.205 0 0 0-.267.242" })
  ]))
}