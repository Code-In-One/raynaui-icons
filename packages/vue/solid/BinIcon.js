const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M9.5 2.75a1 1 0 0 0-.935.646l-.23.606a109 109 0 0 1-1.97-.215l-.18-.022-.061-.007a1 1 0 0 0-.247 1.984l.067.009.186.022a106 106 0 0 0 2.78.293c1.071.098 2.246.184 3.09.184s2.02-.086 3.091-.184a104 104 0 0 0 2.78-.293l.185-.022.067-.009a1 1 0 0 0-.246-1.984l-.062.007-.18.022a103 103 0 0 1-1.97.215l-.23-.606a1 1 0 0 0-.935-.646z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "m17.912 7.98-.856 11.99a.975.975 0 0 1-.826.902c-.994.148-2.77.376-4.23.378-1.478.002-3.244-.228-4.233-.376a.974.974 0 0 1-.822-.9L6.088 7.979a1.018 1.018 0 0 1 1.134-1.077c1.273.147 3.287.348 4.778.348 1.492 0 3.505-.201 4.778-.348a1.018 1.018 0 0 1 1.134 1.077M11 11.75a1 1 0 1 0-2 0v5a1 1 0 0 0 2 0zm3-1a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1",
      "clip-rule": "evenodd"
    })
  ]))
}