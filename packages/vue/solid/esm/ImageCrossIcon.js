import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3.5 7a2 2 0 0 1 2-2h11a1 1 0 1 0 0-2h-11a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-8a1 1 0 1 0-2 0v6.25l-4.437-5.546a3 3 0 0 0-4.839.21L10.5 13.5l-.661-.516a2 2 0 0 0-2.697.613l-2.81 4.255A2 2 0 0 0 4 18.954V19q0 .183.032.358A2 2 0 0 1 3.5 18z" }),
    _createElementVNode("path", { d: "M5.683 8.798c.481.16.859.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 7.72 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018M22.743 5.828l.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.708a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.415-1.414z" })
  ]))
}