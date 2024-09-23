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
      d: "M9.905 6.783c1.766-.883 3.845.4 3.845 2.376v.2l5.154-2.576c1.767-.883 3.846.4 3.846 2.376v5.682c0 1.976-2.08 3.26-3.846 2.377l-5.154-2.576v.2c0 1.975-2.08 3.258-3.845 2.376l-5.686-2.842c-1.959-.979-1.959-3.773 0-4.752zm1.845 2.376a.657.657 0 0 0-.951-.587l-5.686 2.84a.656.656 0 0 0 0 1.175L10.8 15.43c.437.218.951-.1.951-.588zm2 2.842c0 .233.122.465.363.586L19.8 15.43c.437.218.951-.1.951-.588V9.16a.657.657 0 0 0-.951-.587l-5.686 2.84a.65.65 0 0 0-.363.587z",
      "clip-rule": "evenodd"
    })
  ]))
}