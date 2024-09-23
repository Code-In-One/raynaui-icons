const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.785 7.2H18.5a3 3 0 0 1 2.999 3v4.679a3.334 3.334 0 0 0-6.333 1.454V17.4A2.667 2.667 0 0 0 12.5 20H6.5a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.719 0 1.822 1.178 2.648 2.06.3.32.562.6.757.771.14.123.58.369.766.369" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M15.5 19.322v2.345a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2.345c0-.859-.696-1.555-1.556-1.555v-.823a1.944 1.944 0 0 0-3.888 0v.823c-.86 0-1.556.696-1.556 1.555m4-2.572a.5.5 0 0 0-1 0v.9h1z",
      "clip-rule": "evenodd"
    })
  ]))
}