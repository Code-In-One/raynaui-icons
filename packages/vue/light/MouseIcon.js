const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.25 7.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.25 2a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137a2.3 2.3 0 0 0-.05.562A8 8 0 0 0 4.25 13v2a8 8 0 1 0 16 0v-2a8 8 0 0 0-7.253-7.966v-.01c.048-.012.128-.024.253-.024 1.126 0 1.926-.492 2.412-1.166A3.23 3.23 0 0 0 16.25 2M12.23 7h.039a6 6 0 0 1 5.98 6v2a6 6 0 0 1-12 0v-2a6 6 0 0 1 5.981-6",
      "clip-rule": "evenodd"
    })
  ]))
}