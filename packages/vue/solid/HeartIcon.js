const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 5S9 1.5 5 3.5c-2.577 1.29-3.382 3.822-2.898 6.702.791 4.707 6.64 8.787 8.957 10.236a1.76 1.76 0 0 0 1.884 0c2.317-1.45 8.166-5.53 8.957-10.236.484-2.88-.32-5.413-2.9-6.702-4-2-7 1.5-7 1.5" })
  ]))
}