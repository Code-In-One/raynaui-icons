import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.785 7.2H18.5a3 3 0 0 1 2.999 3v5.008l-.507-.45a3 3 0 0 0-3.986 0l-1.5 1.333A3 3 0 0 0 15.005 20H6.5a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.719 0 1.822 1.178 2.648 2.06.3.32.562.6.757.771.14.123.58.369.766.369" }),
    _createElementVNode("path", { d: "M19.664 16.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 18 19.2V22a1 1 0 1 0 2 0v-2.8a1 1 0 0 0 1.164-1.614z" })
  ]))
}