import * as React from "react";
import type { SVGProps } from "react";
const SvgSortByAlphabet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 7H3M10 12H3M8 17H3"
    />
    <path
      fill="#000"
      d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694 4.5-10-1.368-.616-4.5 10zm9-.616-1.636-3.636-1.368.615 1.636 3.637zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"
    />
  </svg>
);
export default SvgSortByAlphabet;
