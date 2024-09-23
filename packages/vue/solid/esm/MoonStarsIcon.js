import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M15.04 2.326c.422.11.313.76-.111.861C11.865 3.92 9.5 6.71 9.5 10a7 7 0 0 0 11.514 5.35c.333-.28.915.019.75.423A10 10 0 0 1 12.5 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c.878 0 1.73.113 2.54.326" }),
    _createElementVNode("path", { d: "M15.843 8.041a1.34 1.34 0 0 0-.85-.849.448.448 0 0 1 0-.849c.402-.133.716-.448.85-.849a.448.448 0 0 1 .85 0c.133.401.447.716.848.85a.448.448 0 0 1 0 .848c-.4.134-.715.449-.849.85a.448.448 0 0 1-.849 0M13.994 13.192c.4.134.715.448.849.85a.448.448 0 0 0 .85 0c.133-.402.447-.716.848-.85a.448.448 0 0 0 0-.849 1.34 1.34 0 0 1-.849-.849.448.448 0 0 0-.849 0c-.134.401-.448.716-.85.85a.448.448 0 0 0 0 .848" })
  ]))
}