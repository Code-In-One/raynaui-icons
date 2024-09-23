import * as React from "react";
function BellIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.25 3a1 1 0 0 0-2 0v.57a7 7 0 0 0-6 6.929v4q.001.003-.005.042a1 1 0 0 1-.03.13q-.046.167-.148.415c-.138.33-.333.709-.548 1.092-.404.72-.607 1.577-.454 2.393.16.86.715 1.61 1.66 1.971.845.322 1.97.616 3.455.791q.053.046.125.104c.15.12.365.276.637.431a4.67 4.67 0 0 0 2.308.632c.974 0 1.77-.324 2.309-.632a5 5 0 0 0 .761-.535c1.486-.175 2.61-.47 3.455-.791.946-.36 1.5-1.11 1.661-1.97.153-.817-.05-1.674-.455-2.394-.215-.383-.41-.763-.547-1.093a4 4 0 0 1-.149-.415 1 1 0 0 1-.03-.13l-.005-.04v-4.001a7 7 0 0 0-6-6.928zm-6 7.499a5 5 0 0 1 10 0V14.5c0 .463.174.962.339 1.357.18.43.414.883.648 1.3.228.405.282.787.233 1.046-.04.214-.146.371-.406.47-1.075.41-2.89.827-5.814.827s-4.738-.418-5.813-.827c-.26-.099-.367-.256-.407-.47-.048-.259.006-.641.233-1.046.234-.417.47-.87.649-1.3.165-.395.338-.894.338-1.357z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BellIcon);
export default ForwardRef;