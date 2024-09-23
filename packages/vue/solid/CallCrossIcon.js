const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m5.426 3.515-.536.535c-.562.563-.876 1.33-.69 2.103.397 1.653 1.632 4.839 5.468 8.675s7.023 5.071 8.676 5.469c.774.186 1.54-.128 2.103-.69l.535-.536a3 3 0 0 0 0-4.243l-.929-.928a3 3 0 0 0-3.604-.487l-.097.055c-.94.535-2.104.532-2.98-.102-.437-.316-.89-.673-1.229-1.012-.339-.34-.696-.792-1.012-1.229-.634-.876-.637-2.04-.102-2.98l.055-.097a3 3 0 0 0-.487-3.604l-.929-.93a3 3 0 0 0-4.242 0" }),
    _createElementVNode("path", { d: "M16.793 4.879a1 1 0 1 0-1.414 1.414l.707.707-.707.707a1 1 0 1 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.415-1.414L18.915 7l.707-.707a1 1 0 0 0-1.415-1.414l-.707.707z" })
  ]))
}