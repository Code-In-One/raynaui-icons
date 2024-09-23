const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.052 4.514A1 1 0 0 1 8.926 4h8.04a1 1 0 1 0 0-2h-8.04a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7a3 3 0 0 0 2.346 1.53V22h8.1v-.005a3 3 0 0 0 2.445-1.538l3.889-7a3 3 0 0 0 0-2.914l-.171-.308a1 1 0 0 0-1.749.971l.171.308a1 1 0 0 1 0 .972l-1.01 1.817a2 2 0 0 0-.595-.627l-2.354-1.59a2 2 0 0 0-2.748.517l-1.022 1.46-1.078-.666a2 2 0 0 0-2.624.594L7.171 17.9l-3.008-5.413a1 1 0 0 1 0-.972z" }),
    _createElementVNode("path", { d: "M6.932 8.798c.481.16.859.538 1.02 1.02.162.489.855.489 1.018 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 8.97 6.76a.537.537 0 0 0-1.019 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018M21.75 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2h-1z" })
  ]))
}