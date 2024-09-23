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
      d: "M2.75 6.639C2.75 4.629 4.38 3 6.389 3h7.987c.394 0 .715.157.942.315s.415.357.569.544c.305.37.587.84.828 1.253l.174.3c.184.32.35.606.513.853q.12.183.21.29h1.139a4 4 0 0 1 3.999 4v4.786a3 3 0 0 0-2-1.3V13h-2a1 1 0 0 0-.566 1.825 3 3 0 0 0-.91 1.788A3 3 0 0 1 18.75 11h2.001v-.444a2 2 0 0 0-2-2h-14V17a2 2 0 0 0 2 2h9.505a3 3 0 0 0-.486 2H6.75a4 4 0 0 1-4-4zm2.002-.083H15.24l-.105-.18q-.076-.134-.148-.258c-.245-.421-.455-.759-.644-.988q-.075-.089-.118-.13H6.389c-.877 0-1.594.69-1.637 1.556",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "m22.414 21.414-1.5 1.333a1 1 0 0 1-1.328 0l-1.5-1.333A1 1 0 0 1 19.25 19.8V17a1 1 0 1 1 2 0v2.8a1 1 0 0 1 1.164 1.614" })
  ]))
}