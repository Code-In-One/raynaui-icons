const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.785 7.2H18.5a3 3 0 0 1 2.999 3v5.443a3 3 0 0 0-2 .296A3.001 3.001 0 0 0 15.44 20H6.5a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.719 0 1.822 1.178 2.648 2.06.3.32.562.6.757.771.14.123.58.369.766.369" }),
    _createElementVNode("path", { d: "M18.793 17.879a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.414-1.414L20.914 20l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707z" })
  ]))
}