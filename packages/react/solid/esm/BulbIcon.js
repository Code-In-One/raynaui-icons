import * as React from "react";
function BulbIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.923 15.307a6.5 6.5 0 1 0-5.846 0l.85 3.398a.39.39 0 0 0 .377.295c.394 0 .784.075 1.172.15l.194.036c.114.022.229.036.33.036s.216-.014.33-.036l.194-.037c.388-.074.778-.149 1.172-.149a.39.39 0 0 0 .378-.295zm-1.602-6.754a1 1 0 0 0-1.543-1.257l-1.488 1.5a1 1 0 0 0 .592 1.697 1 1 0 0 0 1.628 1.15l1.257-1.5a1 1 0 0 0-.446-1.59",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 20a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BulbIcon);
export default ForwardRef;