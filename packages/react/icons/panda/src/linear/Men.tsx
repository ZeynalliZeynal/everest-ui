import * as React from "react";
import type { SVGProps } from "react";
const SvgMen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={10} cy={14} r={8} stroke="#000" strokeWidth={1.5} />
    <path
      fill="#000"
      d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z"
    />
  </svg>
);
export default SvgMen;
