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
      d: "M11.01 3.48a.25.25 0 0 1 .25-.25h2.478a.25.25 0 0 1 .25.25v1.609H11.01zm8.016 5.359v1.663l-4.85-2.424a3.75 3.75 0 0 0-3.354 0l-4.85 2.425V8.839a2.25 2.25 0 0 1 2.25-2.25h8.554a2.25 2.25 0 0 1 2.25 2.25m-7.533.58a2.25 2.25 0 0 1 2.012 0l5.935 2.968 2.143 1.071c.82.41 1.264 1.236 1.115 2.048a14.4 14.4 0 0 1-.64 2.4c-.3.806-.68 1.497-1.136 1.959-.521.527-1.032.765-1.55.856-.54.094-1.138.037-1.843-.113-.426-.091-.83-.2-1.264-.318a42 42 0 0 0-1.04-.27c-.835-.204-1.75-.378-2.726-.378-.977 0-1.891.174-2.727.377-.378.093-.717.184-1.04.271-.434.117-.837.227-1.264.318-.704.15-1.302.207-1.842.113-.519-.09-1.03-.33-1.55-.856-.457-.462-.835-1.153-1.137-1.96a14.4 14.4 0 0 1-.64-2.4c-.148-.81.295-1.637 1.115-2.047l2.143-1.071z",
      "clip-rule": "evenodd"
    })
  ]))
}