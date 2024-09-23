import * as React from "react";
function PullRequestIcon({
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
    d: "m14.899 4.016.308-.309a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414l-.26-.26A3 3 0 0 1 17.5 9v8a1 1 0 0 0 .02.2 2.5 2.5 0 1 0 1.96 0 1 1 0 0 0 .02-.2V9a5 5 0 0 0-4.601-4.984M5 5.5a2.5 2.5 0 0 0 1.5 2.292V17q0 .102.02.2a2.5 2.5 0 1 0 1.96 0q.02-.098.02-.2V7.792A2.5 2.5 0 1 0 5 5.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PullRequestIcon);
export default ForwardRef;