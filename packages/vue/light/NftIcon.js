const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.932 8.798c.481.16.859.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 8.97 6.76a.537.537 0 0 0-1.019 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M19.195 20.457a3 3 0 0 1-2.446 1.538V22H8.65v-.013a3 3 0 0 1-2.346-1.53l-3.89-7a3 3 0 0 1 0-2.914l3.89-7A3 3 0 0 1 8.926 2h7.646a3 3 0 0 1 2.623 1.543l3.889 7a3 3 0 0 1 0 2.914zM8.052 4.514A1 1 0 0 1 8.926 4h7.646a1 1 0 0 1 .875.514l3.888 7a1 1 0 0 1 0 .972l-.43.775-2.97-2.005-.004-.004a3 3 0 0 0-4.122.776l-.48.686-.292-.18-.017-.01a3 3 0 0 0-3.935.892l-2.455 3.51-2.467-4.44a1 1 0 0 1 0-.972zm8.77 8.403 3.108 2.099-2.483 4.47a1 1 0 0 1-.875.514h-3.981a1 1 0 0 1-.82-1.573l3.676-5.252a1 1 0 0 1 1.372-.26zm-6.69 4.363a2.96 2.96 0 0 0-.37 2.72h-.836a1 1 0 0 1-.874-.514l-.282-.507c.03-.165.087-.318.142-.397l2.812-4.02a1 1 0 0 1 1.297-.304l.159.098z",
      "clip-rule": "evenodd"
    })
  ]))
}