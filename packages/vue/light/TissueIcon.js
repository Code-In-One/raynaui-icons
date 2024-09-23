const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.75 4.5c.674 0 1.333.134 1.861.398.469.235 1.139.743 1.139 1.602s-.67 1.367-1.139 1.602c-.528.264-1.187.398-1.861.398s-1.333-.134-1.861-.398C8.42 7.867 7.75 7.359 7.75 6.5s.67-1.367 1.139-1.602c.528-.264 1.187-.398 1.861-.398" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M19.25 6.5V9h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-9.5c-2.184 0-4.21-.411-5.726-1.119-1.436-.67-2.774-1.795-2.774-3.381v-11c0-1.586 1.338-2.711 2.774-3.381C6.54 2.41 8.566 2 10.75 2s4.21.411 5.726 1.119c1.436.67 2.774 1.795 2.774 3.381m-15 0c0-.347.341-.972 1.62-1.569C7.067 4.373 8.79 4 10.75 4s3.683.373 4.88.931c1.279.597 1.62 1.222 1.62 1.569s-.341.972-1.62 1.569C14.433 8.627 12.71 9 10.75 9s-3.683-.373-4.88-.931C4.59 7.472 4.25 6.847 4.25 6.5m0 11V9.466q.377.23.774.415C6.54 10.59 8.566 11 10.75 11h9.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9.5c-1.959 0-3.683-.372-4.88-.931-1.279-.597-1.62-1.222-1.62-1.569",
      "clip-rule": "evenodd"
    })
  ]))
}