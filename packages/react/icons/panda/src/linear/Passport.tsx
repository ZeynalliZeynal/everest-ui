import * as React from "react";
import type { SVGProps } from "react";
const SvgPassport = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"
    />
    <circle cx={12} cy={13} r={3} stroke="#000" strokeWidth={1.5} />
    <path
      fill="#000"
      d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zM5.07 6.75H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5c0-.16.117-.295.276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5c0 1.006.815 1.821 1.821 1.821z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M10 19h4" />
  </svg>
);
export default SvgPassport;
