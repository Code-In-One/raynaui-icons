const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.35 3c-2.363 0-4.2 1.82-4.2 3.97q0 .276.038.54a1 1 0 0 1-.616 1.069c-1.093.44-1.822 1.455-1.822 2.598 0 1.116.704 2.118 1.752 2.57a5 5 0 0 0-.857 1.804c-1.696-.76-2.895-2.413-2.895-4.374 0-1.763.975-3.282 2.4-4.122v-.084C4.15 3.63 6.969 1 10.35 1c2.74 0 5.103 1.722 5.907 4.153a6.5 6.5 0 0 0-2.424-.4C13.084 3.703 11.816 3 10.35 3" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M14.35 6c-3.381 0-6.2 2.631-6.2 5.97v.085c-1.425.84-2.4 2.359-2.4 4.122 0 2.706 2.282 4.823 5 4.823h7.2c3.16 0 5.8-2.46 5.8-5.588 0-2.3-1.434-4.246-3.445-5.108C19.55 7.794 17.147 6 14.35 6m-4.2 5.97c0-2.15 1.837-3.97 4.2-3.97 2.089 0 3.777 1.43 4.13 3.247a1 1 0 0 0 .68.762c1.531.486 2.59 1.847 2.59 3.403 0 1.94-1.658 3.588-3.8 3.588h-7.2c-1.7 0-3-1.306-3-2.823 0-1.143.729-2.158 1.822-2.598a1 1 0 0 0 .616-1.07 4 4 0 0 1-.038-.538",
      "clip-rule": "evenodd"
    })
  ]))
}