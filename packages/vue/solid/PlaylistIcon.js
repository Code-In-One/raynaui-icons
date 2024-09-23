const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M2.5 4.5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1M2.5 9.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M2.5 14.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M2.5 19.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M18.097 7a.67.67 0 0 1 .482.201c.323.228.82.638 1.323 1.053.64.528 1.289 1.063 1.598 1.238-.08.934-.74 2.723-2.702 3.022v3.628q.01.143-.01.274 0 .038-.005.077C18.59 18.316 17.333 20 15.52 20c-1.314 0-2.336-1.77-2.873-2.954-.288-.636-.154-1.389.435-1.685.52-.26 1.306-.5 2.438-.5.782 0 1.4.114 1.877.27V7.735c0-.405.314-.734.701-.734" })
  ]))
}