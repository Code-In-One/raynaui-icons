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
      d: "M7.75 13a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M16.598 9.192c.4.134.715.449.849.85a.448.448 0 0 0 .849 0c.134-.401.448-.716.849-.85a.448.448 0 0 0 0-.849 1.34 1.34 0 0 1-.85-.849.448.448 0 0 0-.848 0c-.134.401-.448.716-.85.85a.447.447 0 0 0 0 .848" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M8.164 3.672A4 4 0 0 1 10.993 2.5h3.514a4 4 0 0 1 2.829 1.172l.686.685a2 2 0 0 0 .671.443l2.543 1.017a4 4 0 0 1 2.514 3.714V17.5a4 4 0 0 1-4 4h-14a4 4 0 0 1-4-4V9.531a4 4 0 0 1 2.514-3.714L6.807 4.8a2 2 0 0 0 .671-.443zm2.829.828a2 2 0 0 0-1.415.586l-.685.686a4 4 0 0 1-1.343.885L5.007 7.674A2 2 0 0 0 3.75 9.531V17.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.531a2 2 0 0 0-1.257-1.857L17.95 6.657a4 4 0 0 1-1.342-.885l-.686-.686a2 2 0 0 0-1.415-.586z",
      "clip-rule": "evenodd"
    })
  ]))
}