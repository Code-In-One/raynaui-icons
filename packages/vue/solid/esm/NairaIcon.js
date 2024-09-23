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
      d: "M18.834 5a1 1 0 0 0-2 0v4.286h-4.941L8.915 4.819c-.823-1.235-2.748-.652-2.748.832v3.635H4.5a1 1 0 0 0 0 2h1.667v1.428H4.5a1 1 0 1 0 0 2h1.667V19a1 1 0 1 0 2 0v-4.286h4.94l2.979 4.467c.823 1.235 2.748.652 2.748-.832v-3.635H20.5a1 1 0 1 0 0-2h-1.666v-1.428H20.5a1 1 0 1 0 0-2h-1.666zm-4.656 7.714-.952-1.428h3.608v1.428zm2.656 3.983-1.322-1.983h1.322zm-6.012-5.411.953 1.428H8.167v-1.428zM8.167 7.303l1.322 1.983H8.167z",
      "clip-rule": "evenodd"
    })
  ]))
}