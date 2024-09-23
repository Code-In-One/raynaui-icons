import * as React from "react";
function StarIcon({
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
    d: "M15.327 2.919c-1.19-1.892-3.965-1.892-5.155 0L8.243 5.985a1.04 1.04 0 0 1-.633.454l-3.546.865c-2.178.532-3.059 3.158-1.594 4.876l2.354 2.76a1 1 0 0 1 .239.723L4.8 19.265c-.165 2.246 2.104 3.843 4.17 3.012l3.385-1.36c.253-.102.537-.102.79 0l3.384 1.36c2.067.83 4.335-.766 4.17-3.012l-.262-3.602a1 1 0 0 1 .238-.722l2.354-2.761c1.465-1.718.584-4.344-1.593-4.876l-3.547-.865a1.04 1.04 0 0 1-.633-.454zm-3.462 1.064a1.05 1.05 0 0 1 1.77 0l1.928 3.067a3.04 3.04 0 0 0 1.852 1.332l3.546.865a1.007 1.007 0 0 1 .546 1.635l-2.354 2.761a3 3 0 0 0-.711 2.165l.263 3.602c.053.732-.7 1.305-1.43 1.011l-3.385-1.36a3.06 3.06 0 0 0-2.281 0l-3.384 1.36c-.732.294-1.484-.279-1.43-1.01l.262-3.603a3 3 0 0 0-.71-2.165l-2.355-2.761a1.007 1.007 0 0 1 .546-1.635l3.546-.865A3.04 3.04 0 0 0 9.936 7.05z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StarIcon);
export default ForwardRef;