const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.5 1a1 1 0 0 1 1 1v2q0 .03-.002.062c3.62.45 6.49 3.32 6.94 6.94L20.5 11h2a1 1 0 1 1 0 2h-2l-.062-.002a8.004 8.004 0 0 1-6.94 6.94L13.5 20v2a1 1 0 1 1-2 0v-2q0-.03.002-.062a8.004 8.004 0 0 1-6.94-6.94L4.5 13h-2a1 1 0 1 1 0-2h2q.03 0 .062.002a8.004 8.004 0 0 1 6.94-6.94L11.5 4V2a1 1 0 0 1 1-1m0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
      "clip-rule": "evenodd"
    })
  ]))
}