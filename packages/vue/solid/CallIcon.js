const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m4.89 4.05.536-.535a3 3 0 0 1 4.242 0l.93.929a3 3 0 0 1 .486 3.604l-.055.096c-.535.94-.532 2.105.102 2.981.316.437.673.89 1.012 1.229.34.339.792.696 1.229 1.012.876.634 2.04.637 2.98.102l.097-.055a3 3 0 0 1 3.604.486l.93.93a3 3 0 0 1 0 4.242l-.536.536c-.563.562-1.33.876-2.103.69-1.653-.398-4.84-1.632-8.676-5.469-3.836-3.836-5.07-7.022-5.468-8.675-.186-.774.128-1.54.69-2.103" })
  ]))
}