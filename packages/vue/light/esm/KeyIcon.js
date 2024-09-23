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
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-width": "2",
      d: "m4.712 18.125.197 1.041c.052.275.183.525.378.72.558.558 1.487.533 2.076-.055l7.515-7.516a2.23 2.23 0 0 1 1.854-.646c1.954.258 3.825-1.152 4.15-3.127l.071-.438c.41-2.495-1.586-4.602-4.092-4.318l-.474.053c-2.097.237-3.608 2.25-3.222 4.291a2.18 2.18 0 0 1-.617 1.935l-1.347 1.347c-.33.33-.73.58-1.167.73l-1.235.424c-.683.235-1.229.78-1.464 1.464a2.37 2.37 0 0 1-1.165 1.338l-.084.043c-1.012.514-1.579 1.634-1.374 2.714Z"
    }),
    _createElementVNode("circle", {
      cx: "1",
      cy: "1",
      r: "1",
      transform: "scale(1 -1)rotate(-45 -1.4 -22.762)"
    })
  ]))
}