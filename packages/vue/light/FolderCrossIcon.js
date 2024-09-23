const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.817 3A3.567 3.567 0 0 0 2.25 6.567V17a4 4 0 0 0 4 4h8a1 1 0 1 0 0-2h-8a2 2 0 0 1-2-2V6.567C4.25 5.702 4.952 5 5.817 5h2.517l.01.004c.028.012.12.05.29.167.239.168.519.415.823.715.283.279.562.577.829.86l.05.054c.264.283.544.581.772.782.162.142.392.279.572.37.101.052.218.106.339.149.097.035.292.099.516.099h5.716c1.104 0 1.999.895 1.999 2V15a1 1 0 1 0 2 0v-4.8c0-2.209-1.789-4-3.999-4H12.65a1.4 1.4 0 0 1-.193-.104l-.037-.025a12 12 0 0 1-.624-.639l-.055-.058a31 31 0 0 0-.88-.914 9 9 0 0 0-1.082-.928C9.44 3.295 8.934 3 8.364 3z" }),
    _createElementVNode("path", { d: "M18.543 17.879a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.414-1.414L20.664 20l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707z" })
  ]))
}