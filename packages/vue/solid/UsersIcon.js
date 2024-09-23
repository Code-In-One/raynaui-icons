const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14.5 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10M8.655 20.527a1 1 0 1 1-1.7-1.054C8.326 17.266 11.128 15 14.5 15s6.175 2.266 7.544 4.473a1 1 0 1 1-1.7 1.054C19.223 18.718 16.985 17 14.5 17s-4.723 1.718-5.845 3.527M8.398 6.56a1 1 0 0 1-.458 1.338C7.032 8.343 6.5 9.152 6.5 10s.532 1.657 1.44 2.102a1 1 0 0 1-.88 1.796C5.583 13.174 4.5 11.733 4.5 10s1.083-3.174 2.56-3.898a1 1 0 0 1 1.338.458M4.655 20.527a1 1 0 1 1-1.7-1.054c.58-.934 1.506-1.713 2.54-2.317a1 1 0 0 1 1.01 1.726c-.864.505-1.5 1.08-1.85 1.645" })
  ]))
}