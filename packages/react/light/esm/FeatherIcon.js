import * as React from "react";
function FeatherIcon({
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
    d: "M22.246 2.91a1 1 0 0 0-1.03-.91c-6.184.214-10.486 3.473-13.313 7.376-2.81 3.878-4.208 8.44-4.643 11.483a1 1 0 0 0 1.947.432q.126-.417.258-.863c.549-1.854 1.195-4.034 2.215-5.626.58-.906 1.21-1.5 1.897-1.759.65-.245 1.514-.254 2.726.351 1.217.61 2.722.183 3.547-.871.624-.798.813-1.843.488-2.989 1.19-.027 2.457-.2 3.518-.782a4.37 4.37 0 0 0 1.953-2.153c.424-.986.572-2.207.437-3.69m-9.049 8.696c-1.472-.737-2.828-.898-4.044-.53q.18-.266.37-.527c2.404-3.319 5.88-6.009 10.77-6.485-.013.756-.139 1.321-.32 1.744a2.37 2.37 0 0 1-1.079 1.19c-1.009.554-2.48.588-4.091.503a1 1 0 0 0-.885 1.554c.837 1.254.578 1.953.357 2.235-.3.383-.795.457-1.078.316",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FeatherIcon);
export default ForwardRef;