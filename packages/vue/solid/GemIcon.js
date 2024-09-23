const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.335 16.122c.097.218-.2.392-.342.202L3.49 10.32a.2.2 0 0 1 .2-.316l2.005.408a.2.2 0 0 1 .143.115zM21.31 10.004a.2.2 0 0 1 .2.316l-4.503 6.004c-.143.191-.44.016-.343-.201l2.497-5.596a.2.2 0 0 1 .143-.115zM17.918 3.78a.2.2 0 0 1 .232-.25l1.288.258a2 2 0 0 1 1.464 1.218l1.036 2.588a.2.2 0 0 1-.146.27l-2.398.489a.2.2 0 0 1-.233-.142zM9.34 3.136A.19.19 0 0 1 9.517 3h5.964a.19.19 0 0 1 .178.135l1.45 5.167a.2.2 0 0 1-.193.254H8.083a.2.2 0 0 1-.193-.254zM6.85 3.53a.2.2 0 0 1 .231.25L5.838 8.211a.2.2 0 0 1-.232.142l-2.398-.489a.2.2 0 0 1-.146-.27l1.036-2.588a2 2 0 0 1 1.464-1.218zM12.683 20.137a.2.2 0 0 1-.366 0l-4.15-9.3a.2.2 0 0 1 .182-.281h8.301a.2.2 0 0 1 .183.281z" })
  ]))
}